Low Birth Weights
========================================================
author: Robert Underwood
width: 1440
height: 900


Birth Weight Data
========================================================

- birthwt {MASS}
- 189 observations, 59 with low birth weight
- Classified as low birth weight if under 2.5 kg or 2500 g

![plot of chunk unnamed-chunk-2](Underwood_Presentation-figure/unnamed-chunk-2-1.png)![plot of chunk unnamed-chunk-2](Underwood_Presentation-figure/unnamed-chunk-2-2.png)

OLS Model
========================================================


```

Call:
lm(formula = bwt ~ race1 + smoke1 + ui1 + lwt, data = birthwt1, 
    subset = train)

Residuals:
     Min       1Q   Median       3Q      Max 
-1924.14  -360.51    49.64   435.04  1475.55 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept) 3077.390    284.859  10.803  < 2e-16 ***
race1black  -635.440    166.914  -3.807 0.000223 ***
race1other  -439.324    137.835  -3.187 0.001831 ** 
smoke1yes   -501.802    124.007  -4.047 9.24e-05 ***
ui1yes      -594.193    161.488  -3.679 0.000351 ***
lwt            3.553      1.950   1.822 0.070979 .  
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

Residual standard error: 636.3 on 120 degrees of freedom
Multiple R-squared:  0.2967,	Adjusted R-squared:  0.2674 
F-statistic: 10.12 on 5 and 120 DF,  p-value: 4.166e-08
```

OLS Continued
========================================================

```

	studentized Breusch-Pagan test

data:  OLS.reduced
BP = 2.1088, df = 5, p-value = 0.8339
```

```
           GVIF Df GVIF^(1/(2*Df))
race1  1.246028  2        1.056530
smoke1 1.145375  1        1.070222
ui1    1.039183  1        1.019403
lwt    1.134997  1        1.065362
```

![plot of chunk unnamed-chunk-4](Underwood_Presentation-figure/unnamed-chunk-4-1.png)

Binomial Logistic Regression
========================================================


```

Call:
glm(formula = low1 ~ lwt + race1 + smoke1 + ui1, family = binomial(link = "logit"), 
    data = birthwt1, subset = train)

Deviance Residuals: 
    Min       1Q   Median       3Q      Max  
-1.5312  -0.7353  -0.4968   0.7137   2.2064  

Coefficients:
            Estimate Std. Error z value Pr(>|z|)   
(Intercept) -0.58035    1.18819  -0.488  0.62525   
lwt         -0.01602    0.00865  -1.852  0.06406 . 
race1black   1.77052    0.65778   2.692  0.00711 **
race1other   1.06012    0.59395   1.785  0.07428 . 
smoke1yes    1.54959    0.52750   2.938  0.00331 **
ui1yes       1.25122    0.56594   2.211  0.02705 * 
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

(Dispersion parameter for binomial family taken to be 1)

    Null deviance: 146.94  on 125  degrees of freedom
Residual deviance: 122.28  on 120  degrees of freedom
AIC: 134.28

Number of Fisher Scoring iterations: 5
```

```
               log.odds      odds      prob
(Intercept) -0.58034936 0.5597028 0.3588522
lwt         -0.01601724 0.9841103 0.4959958
race1black   1.77052381 5.8739294 0.8545228
race1other   1.06011723 2.8867094 0.7427129
smoke1yes    1.54959202 4.7095484 0.8248548
ui1yes       1.25121618 3.4945904 0.7775103
```

Classification Tree
========================================================

![plot of chunk unnamed-chunk-6](Underwood_Presentation-figure/unnamed-chunk-6-1.png)![plot of chunk unnamed-chunk-6](Underwood_Presentation-figure/unnamed-chunk-6-2.png)

Error Comparison
========================================================


```
                      Error Rate Sensitivity Specificity
results.reg            0.3809524   0.2400000   0.8684211
results.log            0.4126984   0.2000000   0.8421053
results.prune.predict  0.1956522   0.1481481   0.9736842
```

- Models do a poor job of predicting which children will have a low birth rate.
- Alcohol, use of illegal drugs, income not provided.
- Limited affect by age.
