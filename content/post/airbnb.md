

In this analysis, I will try different feature engineering and modeling approaches to predict the destination a user will book on AirBnb. Because there a multiple country destinations represented in the dataset, this is a multi-class classification problem. 

I was interested in this AirBnb problem because it presents an unbalanced class-representation problem: a large majority of the outcome variable is concentrated in two classes, with NDF and the US representing 58% and 29% respectively. Furthermore, the problem also includes an additional dataset (sessions) which contains additional information about user behavior on the site. I thought it would be interesting to engineer features from this data to see if it could improve the performance of a model to predict user booking destinations. 

To solve the unbalanced problem, I test various ensemble classifiers and hyperparameter configurations. In particular, I compare a boosted ensemble approach (using AdaBoost) with an averaging approach (using ExtraTrees). I also engineer features from the sessions data to measure performance gains. 


```python
import matplotlib.pyplot as plt
import numpy as np 
import pandas as pd 
import warnings
from tabulate import tabulate
warnings.filterwarnings("ignore")

import os
for dirname, _, filenames in os.walk('/kaggle/input'):
    for filename in filenames:
        print(os.path.join(dirname, filename))

# Any results you write to the current directory are saved as output.
```

    /kaggle/input/airbnb-recruiting-new-user-bookings/train_users_2.csv.zip
    /kaggle/input/airbnb-recruiting-new-user-bookings/sessions.csv.zip
    /kaggle/input/airbnb-recruiting-new-user-bookings/age_gender_bkts.csv.zip
    /kaggle/input/airbnb-recruiting-new-user-bookings/countries.csv.zip
    /kaggle/input/airbnb-recruiting-new-user-bookings/sample_submission_NDF.csv.zip
    /kaggle/input/airbnb-recruiting-new-user-bookings/test_users.csv.zip
    

Below I read in two dataframe: 

1. train_users is the dataset with information about users and the outcome variable ('country_destination')
2. sessions is a transactional dataset with entries for user behavior on the site (e.g. clicks, searches, etc.)

I will first try modeling with just the train_users data to see if country_destination can be predicted based on user attributes. Then, I will do additional feature engineering on the sessions data to see if including this information improves model performance. For example, does knowing how many times a user searched on the site increase the liklihood of correctly predicting his or her ultimate destination choice? 


```python
train_users = pd.read_csv('/kaggle/input/airbnb-recruiting-new-user-bookings/train_users_2.csv.zip')
sessions=pd.read_csv('/kaggle/input/airbnb-recruiting-new-user-bookings/sessions.csv.zip')
train_users.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>date_account_created</th>
      <th>timestamp_first_active</th>
      <th>date_first_booking</th>
      <th>gender</th>
      <th>age</th>
      <th>signup_method</th>
      <th>signup_flow</th>
      <th>language</th>
      <th>affiliate_channel</th>
      <th>affiliate_provider</th>
      <th>first_affiliate_tracked</th>
      <th>signup_app</th>
      <th>first_device_type</th>
      <th>first_browser</th>
      <th>country_destination</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>gxn3p5htnn</td>
      <td>2010-06-28</td>
      <td>20090319043255</td>
      <td>NaN</td>
      <td>-unknown-</td>
      <td>NaN</td>
      <td>facebook</td>
      <td>0</td>
      <td>en</td>
      <td>direct</td>
      <td>direct</td>
      <td>untracked</td>
      <td>Web</td>
      <td>Mac Desktop</td>
      <td>Chrome</td>
      <td>NDF</td>
    </tr>
    <tr>
      <th>1</th>
      <td>820tgsjxq7</td>
      <td>2011-05-25</td>
      <td>20090523174809</td>
      <td>NaN</td>
      <td>MALE</td>
      <td>38.0</td>
      <td>facebook</td>
      <td>0</td>
      <td>en</td>
      <td>seo</td>
      <td>google</td>
      <td>untracked</td>
      <td>Web</td>
      <td>Mac Desktop</td>
      <td>Chrome</td>
      <td>NDF</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4ft3gnwmtx</td>
      <td>2010-09-28</td>
      <td>20090609231247</td>
      <td>2010-08-02</td>
      <td>FEMALE</td>
      <td>56.0</td>
      <td>basic</td>
      <td>3</td>
      <td>en</td>
      <td>direct</td>
      <td>direct</td>
      <td>untracked</td>
      <td>Web</td>
      <td>Windows Desktop</td>
      <td>IE</td>
      <td>US</td>
    </tr>
    <tr>
      <th>3</th>
      <td>bjjt8pjhuk</td>
      <td>2011-12-05</td>
      <td>20091031060129</td>
      <td>2012-09-08</td>
      <td>FEMALE</td>
      <td>42.0</td>
      <td>facebook</td>
      <td>0</td>
      <td>en</td>
      <td>direct</td>
      <td>direct</td>
      <td>untracked</td>
      <td>Web</td>
      <td>Mac Desktop</td>
      <td>Firefox</td>
      <td>other</td>
    </tr>
    <tr>
      <th>4</th>
      <td>87mebub9p4</td>
      <td>2010-09-14</td>
      <td>20091208061105</td>
      <td>2010-02-18</td>
      <td>-unknown-</td>
      <td>41.0</td>
      <td>basic</td>
      <td>0</td>
      <td>en</td>
      <td>direct</td>
      <td>direct</td>
      <td>untracked</td>
      <td>Web</td>
      <td>Mac Desktop</td>
      <td>Chrome</td>
      <td>US</td>
    </tr>
  </tbody>
</table>
</div>



I will use scikit pipelines to build a pre-processing and classification pipeline to make predictions. Before starting with scikit pipelines, it is first useful to look at the datatypes of predictor variables


```python
train_users.dtypes
```




    id                          object
    date_account_created        object
    timestamp_first_active       int64
    date_first_booking          object
    gender                      object
    age                        float64
    signup_method               object
    signup_flow                  int64
    language                    object
    affiliate_channel           object
    affiliate_provider          object
    first_affiliate_tracked     object
    signup_app                  object
    first_device_type           object
    first_browser               object
    country_destination         object
    dtype: object



I need to remove the id column and outcome variable from the dataset. Also, I need to split it into a train & test set.


```python
from sklearn.model_selection import train_test_split

def get_split(df):
    X = df.drop(columns=['country_destination', 'id'])
    y = df['country_destination']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    return(X_train,X_test,y_train,y_test)

X_train,X_test,y_train,y_test=get_split(train_users)

```

For the scikit pre-processing pipeline, I will have a separate procedure for numeric and categorical column/feature types. Therefore, below I will create a list of the column names for each type.


```python
#get columns by type
def get_coltypes(df):
    numeric_features = df.select_dtypes(include=['int64', 'float64']).columns
    categorical_features = df.select_dtypes(include=['object']).columns
    return numeric_features,categorical_features

numeric_features,categorical_features=get_coltypes(X_train)

```

### Scikit Pipeline  
1. First, I will define a transformer for each column type (numeric/categorical. 
2. Then, I will put them together into a preprocessing object and specify the columns captured above to which the transformers should be applied.


```python
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import ColumnTransformer

#define transformers as pipeline
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))])


preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
        ('cat', categorical_transformer, categorical_features)])
```

With the pre-processing part of the pipeline defined, now I will add the classification step. 
1. First, I define two classifiers I want to compare. Here I use AdaBoost and ExtraTrees classifiers.
2. For each classifier, I apply the pipeline: pre-processing and fitting the classifier. Then the model is scored on the test data. 

Here I will compare an AdaBoost classifier with an ExtraTrees classifier. AdaBoost is a "meta-estimator" that initially fits a "base" classifier (here a decision tree) on the original dataset and then fits additional copies of the classifier on the same dataset but adjusts weights of incorrect classifications to target these more difficult cases.

ExtraTrees (from sklearn.ensemble) is also a "meta-estimator" that fits randomized decision trees ("extra-trees") on sub-samples of the dataset and then uses averaging to 


```python
from sklearn.metrics import accuracy_score, log_loss
from sklearn.ensemble import AdaBoostClassifier,ExtraTreesClassifier
from sklearn.tree import DecisionTreeClassifier
# classifiers = [
#     AdaBoostClassifier(),
#     ExtraTreesClassifier()
#     ]

def make_preds(classifier):
    pipe = Pipeline(steps=[('preprocessor', preprocessor),
                           ('classifier', classifier)])
    model=pipe.fit(X_train, y_train)
    print(classifier)
    print("model score: ",pipe.score(X_test, y_test))
    y_pred = pipe.predict(X_test)
    return model,y_pred

ada_model,ada_pred=make_preds(AdaBoostClassifier())
et_model,et_pred=make_preds(ExtraTreesClassifier())
```

    AdaBoostClassifier(algorithm='SAMME.R', base_estimator=None, learning_rate=1.0,
                       n_estimators=50, random_state=None)
    model score:  0.8756880841395142
    ExtraTreesClassifier(bootstrap=False, class_weight=None, criterion='gini',
                         max_depth=None, max_features='auto', max_leaf_nodes=None,
                         min_impurity_decrease=0.0, min_impurity_split=None,
                         min_samples_leaf=1, min_samples_split=2,
                         min_weight_fraction_leaf=0.0, n_estimators=10, n_jobs=None,
                         oob_score=False, random_state=None, verbose=0,
                         warm_start=False)
    model score:  0.8523342156426413
    

Below I will write a function to compare the distribution of predictions produced by each model above to the actual distribution of the outcome variable (country destination) in the dataset. 
It first gets the value counts of each country in the original and predicted datasets. It then adds % columns. 


```python
def compare_preds(y_pred):
    preds_df = pd.DataFrame(data = y_pred, columns = ['y_pred'], index = X_test.index.copy())
    df_out = pd.merge(y_test, preds_df, how = 'left', left_index = True, right_index = True)
    preds_summary=df_out.apply(pd.Series.value_counts).fillna(0)
    preds_summary['cdest_pct'] = preds_summary.country_destination / preds_summary.country_destination.sum()
    preds_summary['predicted_pct'] = preds_summary.y_pred / preds_summary.y_pred.sum()
    return preds_summary.reset_index().sort_values('country_destination',ascending=False)

ada_preds_df=compare_preds(ada_pred)
et_preds_df=compare_preds(et_pred)

ada_preds_df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
      <th>country_destination</th>
      <th>y_pred</th>
      <th>cdest_pct</th>
      <th>predicted_pct</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>7</th>
      <td>NDF</td>
      <td>24768</td>
      <td>24768.0</td>
      <td>0.580169</td>
      <td>0.580169</td>
    </tr>
    <tr>
      <th>10</th>
      <td>US</td>
      <td>12618</td>
      <td>17921.0</td>
      <td>0.295566</td>
      <td>0.419784</td>
    </tr>
    <tr>
      <th>11</th>
      <td>other</td>
      <td>2018</td>
      <td>2.0</td>
      <td>0.047270</td>
      <td>0.000047</td>
    </tr>
    <tr>
      <th>4</th>
      <td>FR</td>
      <td>998</td>
      <td>0.0</td>
      <td>0.023377</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>6</th>
      <td>IT</td>
      <td>571</td>
      <td>0.0</td>
      <td>0.013375</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>5</th>
      <td>GB</td>
      <td>456</td>
      <td>0.0</td>
      <td>0.010681</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>3</th>
      <td>ES</td>
      <td>449</td>
      <td>0.0</td>
      <td>0.010517</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>1</th>
      <td>CA</td>
      <td>287</td>
      <td>0.0</td>
      <td>0.006723</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>2</th>
      <td>DE</td>
      <td>214</td>
      <td>0.0</td>
      <td>0.005013</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>8</th>
      <td>NL</td>
      <td>174</td>
      <td>0.0</td>
      <td>0.004076</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>0</th>
      <td>AU</td>
      <td>98</td>
      <td>0.0</td>
      <td>0.002296</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>9</th>
      <td>PT</td>
      <td>40</td>
      <td>0.0</td>
      <td>0.000937</td>
      <td>0.000000</td>
    </tr>
  </tbody>
</table>
</div>



From the above we can see that AdaBoost only ever predicts NDF or US as destinations. The percent of predictions for NDF is roughly the same as in the dataset but the US is over-predicted. 

Below I gather variables for plotting with ggplot..(the one part of R I can't give up)


```python
ada_plot=pd.melt(ada_preds_df,id_vars=['index'], value_vars=['country_destination','y_pred','cdest_pct','predicted_pct'])
ada_plot=ada_plot[ada_plot['variable'].str.contains("pct")]

et_plot=pd.melt(et_preds_df,id_vars=['index'], value_vars=['country_destination','y_pred','cdest_pct','predicted_pct'])
et_plot=et_plot[et_plot['variable'].str.contains("pct")]

ada_plot.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>index</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>24</th>
      <td>NDF</td>
      <td>cdest_pct</td>
      <td>0.580169</td>
    </tr>
    <tr>
      <th>25</th>
      <td>US</td>
      <td>cdest_pct</td>
      <td>0.295566</td>
    </tr>
    <tr>
      <th>26</th>
      <td>other</td>
      <td>cdest_pct</td>
      <td>0.047270</td>
    </tr>
    <tr>
      <th>27</th>
      <td>FR</td>
      <td>cdest_pct</td>
      <td>0.023377</td>
    </tr>
    <tr>
      <th>28</th>
      <td>IT</td>
      <td>cdest_pct</td>
      <td>0.013375</td>
    </tr>
  </tbody>
</table>
</div>




```python
from plotnine import *

(ggplot(ada_plot)+
    aes(x='index',y='value')+
    geom_col()+
    facet_wrap('variable')+
    xlab("country")+
    ylab("percent"))

```


![png](airbnb_files/airbnb_18_0.png)





    <ggplot: (8787138424405)>




```python
print(et_preds_df)
(ggplot(et_plot)+
    aes(x='index',y='value')+
    geom_col()+
    facet_wrap('variable')+
    xlab("country")+
    ylab("percent"))
```

        index  country_destination  y_pred  cdest_pct  predicted_pct
    7     NDF                24768   24803   0.580169       0.580989
    10     US                12618   16302   0.295566       0.381860
    11  other                 2018     555   0.047270       0.013000
    4      FR                  998     328   0.023377       0.007683
    6      IT                  571     181   0.013375       0.004240
    5      GB                  456     152   0.010681       0.003560
    3      ES                  449     122   0.010517       0.002858
    1      CA                  287     106   0.006723       0.002483
    2      DE                  214      57   0.005013       0.001335
    8      NL                  174      32   0.004076       0.000750
    0      AU                   98      42   0.002296       0.000984
    9      PT                   40      11   0.000937       0.000258
    


![png](airbnb_files/airbnb_19_1.png)





    <ggplot: (-9223363249720116785)>



Interestingly, although the Extra Trees classifier was less accurate overall, it does have some predictions for all classes and more closely resembles the distribution of the outcome variable in the orginal dataset. 

So why does the extra trees classifier have predictions for each class while AdaBoost does not? According to the scikit learn [documentation](https://scikit-learn.org/stable/modules/ensemble.html#forest), ExtraTrees (like RandomForest) is a "perturb-and-combine technique" specifically designed for trees, which means a diverse set of classifiers is created by introducing randomness in the classifier construction. The prediction of the ExtraTrees ensemble is then constructed as the averaged prediction of the individual classifiers.

Additional Feature Engineering from sessions data

Can adding additional features from user sessions history improve performance?


```python
#base new features
sess_feat = sessions.loc[ : , ['user_id', 'secs_elapsed','action']] \
    .groupby('user_id')\
    . agg(total_secs=('secs_elapsed', 'sum'),
          total_actions=('action', 'count'))

sess_feat.head()


```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_secs</th>
      <th>total_actions</th>
    </tr>
    <tr>
      <th>user_id</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>00023iyk9l</th>
      <td>867896.0</td>
      <td>39</td>
    </tr>
    <tr>
      <th>0010k6l0om</th>
      <td>586543.0</td>
      <td>63</td>
    </tr>
    <tr>
      <th>001wyh0pz8</th>
      <td>282965.0</td>
      <td>90</td>
    </tr>
    <tr>
      <th>0028jgx1x1</th>
      <td>297010.0</td>
      <td>31</td>
    </tr>
    <tr>
      <th>002qnbzfs5</th>
      <td>6487080.0</td>
      <td>782</td>
    </tr>
  </tbody>
</table>
</div>



Now I will get the get the top 10 actions and append a count of each action for each user


```python
#get top 10 actions
top_actions=sessions \
    .groupby('action')\
    .count().sort_values('user_id',ascending=False).nlargest(10,'action_type').reset_index()
print(top_actions['action'])


sessions=sessions.loc[sessions['action'].isin(top_actions['action'])]


```

    0                     show
    1                    index
    2           search_results
    3              personalize
    4                   search
    5    ajax_refresh_subtotal
    6                   update
    7         similar_listings
    8       social_connections
    9                  reviews
    Name: action, dtype: object
    


```python
# gets count of each user,action pair and counts--> pivots to wide w/unstack
user_actions=sessions.groupby(['user_id', 'action']) \
        .size().unstack('action',fill_value=0).reset_index()
        

user_actions=user_actions.drop(columns=['index'],axis=1)

user_actions.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>action</th>
      <th>user_id</th>
      <th>ajax_refresh_subtotal</th>
      <th>personalize</th>
      <th>reviews</th>
      <th>search</th>
      <th>search_results</th>
      <th>show</th>
      <th>similar_listings</th>
      <th>social_connections</th>
      <th>update</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>00023iyk9l</td>
      <td>2</td>
      <td>4</td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>9</td>
      <td>3</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0010k6l0om</td>
      <td>8</td>
      <td>8</td>
      <td>0</td>
      <td>0</td>
      <td>8</td>
      <td>20</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>001wyh0pz8</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>66</td>
      <td>0</td>
      <td>6</td>
      <td>0</td>
      <td>2</td>
      <td>1</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0028jgx1x1</td>
      <td>0</td>
      <td>0</td>
      <td>5</td>
      <td>9</td>
      <td>0</td>
      <td>15</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>002qnbzfs5</td>
      <td>0</td>
      <td>0</td>
      <td>13</td>
      <td>125</td>
      <td>0</td>
      <td>232</td>
      <td>0</td>
      <td>72</td>
      <td>13</td>
    </tr>
  </tbody>
</table>
</div>



Joining additional features (user_actions) back to train_users..
Two-part join: 
1. First join to get all user ids in train users in user_actions. Fill missing users with 0, as they have not completed the actions.


```python
user_actions=train_users[['id']].merge(user_actions,right_on="user_id",left_on="id",how="left").fillna(0)

user_actions=user_actions.drop('user_id',axis=1)

# add session features to user_actions
user_actions=user_actions.merge(sess_feat,left_on="id",right_on="user_id",how="left").fillna(0)

user_actions.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>id</th>
      <th>ajax_refresh_subtotal</th>
      <th>personalize</th>
      <th>reviews</th>
      <th>search</th>
      <th>search_results</th>
      <th>show</th>
      <th>similar_listings</th>
      <th>social_connections</th>
      <th>update</th>
      <th>total_secs</th>
      <th>total_actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>gxn3p5htnn</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>820tgsjxq7</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4ft3gnwmtx</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>bjjt8pjhuk</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>87mebub9p4</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
  </tbody>
</table>
</div>



Check for all users...


```python
assert user_actions['id'].nunique() == train_users['id'].nunique(), "Uh oh.."
```

2. Then join again to update train users to contain the additional features in user_actions


```python
#join to train df
train_users=train_users \
    .merge(user_actions,on="id",how="left")

```

Now that I have a "new" dataset with additional features, I have to re-implement the pre-processing and classification on the new train_users df. Luckily I have a convenient pipeline!! I can just call the functions/steps I defined above. 
1. First update X_train, X_test, etc. to reflect additional features added
2. Then get new list of column names by type
3. Then apply pipeline to updated data and column types

I will again use AdaBoost and ExtraTrees to see if there is any improvement. However, since AdaBoost only predicted two classes using the default parameters, I will tune the parameters to add additional estimators.


```python
#1
X_train,X_test,y_train,y_test=get_split(train_users)

#2
numeric_features,categorical_features=get_coltypes(X_train)

#3
ada_model,ada_pred=make_preds(AdaBoostClassifier(n_estimators=100))
et_model,et_pred=make_preds(ExtraTreesClassifier())

#preds summary df (see above)
ada_preds_df=compare_preds(ada_pred)
et_preds_df=compare_preds(et_pred)

```

    AdaBoostClassifier(algorithm='SAMME.R', base_estimator=None, learning_rate=1.0,
                       n_estimators=100, random_state=None)
    model score:  0.8748213909254878
    ExtraTreesClassifier(bootstrap=False, class_weight=None, criterion='gini',
                         max_depth=None, max_features='auto', max_leaf_nodes=None,
                         min_impurity_decrease=0.0, min_impurity_split=None,
                         min_samples_leaf=1, min_samples_split=2,
                         min_weight_fraction_leaf=0.0, n_estimators=10, n_jobs=None,
                         oob_score=False, random_state=None, verbose=0,
                         warm_start=False)
    model score:  0.8522639432198824
    

Count number of rows with each unique value of outcome variable (destination)


```python
from sklearn.metrics import classification_report
print(classification_report(y_test, ada_pred))
print(classification_report(y_test, et_pred))
```

                  precision    recall  f1-score   support
    
              AU       0.00      0.00      0.00        96
              CA       0.00      0.00      0.00       266
              DE       0.00      0.00      0.00       202
              ES       0.00      0.00      0.00       443
              FR       0.00      0.00      0.00      1035
              GB       0.00      0.00      0.00       479
              IT       0.00      0.00      0.00       569
             NDF       1.00      1.00      1.00     24999
              NL       0.00      0.00      0.00       164
              PT       0.00      0.00      0.00        50
              US       0.70      1.00      0.82     12350
           other       0.00      0.00      0.00      2038
    
        accuracy                           0.87     42691
       macro avg       0.14      0.17      0.15     42691
    weighted avg       0.79      0.87      0.82     42691
    
                  precision    recall  f1-score   support
    
              AU       0.00      0.00      0.00        96
              CA       0.04      0.02      0.02       266
              DE       0.02      0.00      0.01       202
              ES       0.04      0.01      0.02       443
              FR       0.07      0.02      0.03      1035
              GB       0.02      0.00      0.01       479
              IT       0.01      0.00      0.01       569
             NDF       1.00      1.00      1.00     24999
              NL       0.00      0.00      0.00       164
              PT       0.10      0.02      0.03        50
              US       0.70      0.91      0.79     12350
           other       0.12      0.03      0.05      2038
    
        accuracy                           0.85     42691
       macro avg       0.18      0.17      0.16     42691
    weighted avg       0.80      0.85      0.82     42691
    
    

**Feature Importance**


```python
headers = ["name", "score"]
ada_values = sorted(zip(X_train.columns, ada_model['classifier'].feature_importances_), key=lambda x: x[1] * -1)
et_values=sorted(zip(X_train.columns, et_model['classifier'].feature_importances_), key=lambda x: x[1] * -1)

print(tabulate(ada_values, headers, tablefmt="plain"))
print(tabulate(et_values, headers, tablefmt="plain"))
```

    name                       score
    date_account_created        0.02
    timestamp_first_active      0.01
    date_first_booking          0
    gender                      0
    age                         0
    signup_method               0
    signup_flow                 0
    language                    0
    affiliate_channel           0
    affiliate_provider          0
    first_affiliate_tracked     0
    signup_app                  0
    first_device_type           0
    first_browser               0
    ajax_refresh_subtotal       0
    personalize                 0
    reviews                     0
    search                      0
    search_results              0
    show                        0
    similar_listings            0
    social_connections          0
    update                      0
    total_secs                  0
    total_actions               0
    name                           score
    date_account_created     0.0295823
    timestamp_first_active   0.0230676
    date_first_booking       0.00440131
    signup_flow              1.22542e-05
    show                     1.20372e-05
    affiliate_provider       8.89782e-06
    signup_app               7.60872e-06
    first_browser            6.80625e-06
    language                 6.22596e-06
    first_device_type        3.30537e-06
    first_affiliate_tracked  3.2835e-06
    personalize              3.19539e-06
    gender                   2.54569e-06
    ajax_refresh_subtotal    2.13332e-06
    social_connections       1.34189e-06
    similar_listings         9.80416e-07
    update                   8.13657e-07
    search_results           4.61151e-07
    reviews                  2.84878e-08
    age                      8.54644e-09
    signup_method            7.27431e-09
    affiliate_channel        5.8354e-09
    search                   0
    total_secs               0
    total_actions            0
    
