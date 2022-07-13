---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Selecting ICA components for artifact correction"
subtitle: "A brief note of Chaumon et al.(2015)"
summary: ""
authors: []
tags: []
categories: []
date: 2022-07-12T05:34:04+08:00
lastmod: 2022-07-12T05:34:04+08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
This is only a brief note of a journal article written by Chaumon et al.(2015). Figures of EEG components are useful to understand what those artifacts look like, but they won't be published on this site. You can check the original paper or [my note](my_note.pdf) for those figures. 
# ICA component of Neural Origin 
* The components are often dipolar, and their topography is regular and smooth. 
  * Delorme A, Palmer J, Onton J, Oostenveld R, Makeig S. Independent EEG sources are dipolar. PLoS ONE 2012;7(2):e30135, http://dx.doi.org/10.1371/journal.pone.0030135.
  * The dipolar nature of the components can be measured by first fitting a dipolar source to the component (as implemented in the DIPFIT toolbox distributed with EEGLAB), and then measuring the residual variance after removing the fitted data. Residual variance is often very low for accurately modeled components . 
* Often rank amongst the strongest components in the dataset 
* Often contain a peak at physiological frequencies (e.g. alpha, beta, delta or theta) 
  * Alpha (8–12 Hz), Beta (15–30 Hz), delta (1–4 Hz), or Theta (∼5 Hz)  
  * particularly true of components whose topography loads mostly on posterior, middle, or frontal sensors for Alpha, Beta, and Theta frequencies, respectively.  
* May show a strong evoked response to sensory stimuli. 

# Blink Component 
* Topography is essentially flat (i.e. inverse weights close to zero) at all but a few frontal and all EOG electrodes.  
* Activity is usually very large during blinks and the components rank amongst the first dozen components  
* Time courses show abrupt high amplitude variations in otherwise comparatively close to zero amplitudes 
* Power spectra show no power peak at physiological frequencies.  
* Correlation with EOG electrodes is high.  

|Toolbox | Things to check |
|----|----|
|CORRMAP|  Blink components can be identified automatically by template matching with a stereotypical activity pattern  
|ADJUST  | - **Spatial Average Difference (SAD) and Spatial Variance Difference (SVD)** capture components with strong differences in signal between anterior and posterior channels <br>- **Temporal Kurtosis (TK)** indicates the occurrence of rare high amplitude events (i.e. heavy tailed distribution).  |
|FASTER and SASICA| Correlate the time course of the ICs with EOG electrodes  |

# Saccade Eyemovement 
* horizontal saccade activity load maximally onto anterior electrodes, but with opposite polarity on both sides.  
* Vertical saccades load maximally onto anterior sites, with a topography similar to that of blink components.  
* Time courses show abrupt step-like variations 
power spectra show no power peak at physiological frequencies.  
* Correlation with EOG electrodes is high.  

|Toolbox | Things to check |
|----|----|
|CORRMAP| These components are identified automatically by template matching with a stereotypical activity pattern. |
|ADJUST |- For vertical eye movements, it combines a Maximum Epoch Variance (MEV) measure that captures components with strong within epoch variability with the same SAD measure as for blink components. <br> - For horizontal eye movements, it uses MEV along with a Spatial Eye Difference (SED) measure to capture strong differences between two lateral regions of the EEG cap. |
|FASTER and SASICA|  FASTER and SASICA use correlation of component time courses with EOG electrodes (EOGCorr, CorrV and CorrH) to detect eye movements and blink components. | 

# Muscle Component 
* Components capturing muscle activity are usually very focal, encompassing a local group of electrodes (sometimes with opposite polarity) on the edge of the electrode cap. 
* Time courses show a steady noise activity, often remarkable because they do not vary with task events (i.e. no ERP is visible), but rather across trials.  
* The power spectrum of these compo- nents often shows strong power at high frequencies (>20 Hz).  

|Toolbox  | Things to check |
|----|----|
|FASTER |by high Median Gradient (MedGrad) value, or low Hurst Exponent (HE) computed by FASTER|  
|SASICA  |detected by measuring the high time-point by time-point variabil- ity, captured by the low autocorrelation (LoAC) measure of SASICA.  |

*ADJUST and CORRMAP do not attempt to detect muscle components specifically.

# Bad Channel
* Bad channel components have a focal topography, restricted to the bad channel 
* Their time course reflects the noisy nature of the recording.  
* They may also show a very high level of correlation with marked bad channels. 

# Reference
Chaumon, M., Bishop, D. V. M., & Busch, N. A. (2015). A practical guide to the selection of independent components of the electroencephalogram for artifact correction. Journal of Neuroscience Methods, 250, 47–63. https://doi.org/10.1016/j.jneumeth.2015.02.025


