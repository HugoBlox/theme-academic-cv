+++
title = "How long does it take to research and develop a vaccine?"
date = 2017-06-28
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# Use `caption` to display an image caption.
#   Markdown linking is allowed, e.g. `caption = "[Image credit](http://example.org)"`.
# Set `preview` to `false` to disable the thumbnail in listings.
[header]
image = ""
caption = ""
preview = true

+++

*This essay was jointly written by Peter Hurford and Marcus A. Davis. It was originally authored before the creation of Rethink Priorities and posted to the [EA Forum](http://effective-altruism.com/ea/1c5/how_long_does_it_take_to_research_and_develop_a/). It's hosted here for completeness of our research on vaccines.*

Interventions related to vaccines seem to be highly cost-effective. The World Health Organization calls vaccines “one of the most powerful and cost-effective of all health interventions." ([WHO, 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf), pXIV) and the Copenhagen Consensus says that "[v]accination may be the most effective public health intervention of all time” ([Copenhagen Consensus Center Guide to Giving](https://issuu.com/copenhagenconsensus/docs/guidetogiving) 2011, p37). GiveWell finds vaccine-related interventions [to be highly cost-effective](http://www.givewell.org/international/technical/programs/immunization) and have recommended one-off donations to vaccines on multiple occasions [^1] through [Incubation Grants](http://www.givewell.org/research/incubation-grants). However, GiveWell [has historically struggled to find room for more funding](http://blog.givewell.org/2016/07/06/dont-currently-recommend-charities-focused-vaccine-distribution/) in this area[^2].  

How cost-effective might developing new vaccines be? GAVI, the leading funder for vaccine-related work, is cited by a few different sources as potentially saving a life for under $1000[^3], though this estimate is not robust and this estimate is not related solely to work on developing new vaccines. I’d be curious to see more work on evaluating this for a few reasons:

1.  It seems valuable as a benchmark to see how other interventions compare to vaccine-related work.

2.  Comparing differences of cost-effectiveness within vaccine-related work (e.g., developing new vaccines versus further distributing vaccines that already exist) can aid our understanding of how interventions and implementations of interventions can differ.

3.  Assessing the value of R&D for new vaccines could help us understand the value of funding R&D more generally.

Before looking in depth at the cost-effectiveness of vaccines, my first question was how long it takes to make a vaccine.

**What does the literature say?**  

Turning to the literature, [Light, Andrus, and Warburton (2009)](https://www.ncbi.nlm.nih.gov/pubmed/19665605) outline the short pithy answer -- you need “a variable amount of time [...] plus about 5 years”. Here, the five years are the years necessary to get past clinical trials and registration[^4], and the highly variable amount of time is the time you need to find a vaccine that will get past the clinical trials. After passing clinical trials, one would then need about 5-10 years to scale and distribute the vaccine ([Hecht and Jameson, 2011](http://www.resultsfordevelopment.org/sites/resultsfordevelopment.org/files/Rethink%20HIV%202011%20Assessment%20Paper%20-%20Benefit-cost%20analysis%20of%20AIDS%20Vaccine%20Research.pdf)).

It is reported anecdotally to take 12-15 years to discover new medicine (Light, Andrus, & Warburton, 2009), though it’s not clear what this estimate is based on or how this generalize to vaccines. Instead, maybe we could look more at the vaccine lifecycle. For a vaccine to be successful, it has to be successfully developed and then tested through pre-clincal stages, three stages of clinical trials with increasing sample sizes, and then be registered and licensed.

Conditional on a vaccine candidate being successful at every stage, it takes an average of ten years to develop from preclinical stages to launch and an average of 7.6 years to go from Phase I to launch ([Struck, 1996](http://www.nature.com/nbt/journal/v14/n5/abs/nbt0596-591.html))[^5]. The total time to develop a vaccine would be longer, since vaccine candidates can fail and be restarted, multiple candidates are tried simultaneously, and there is additional unaccounted discovery time before preclinical trials.

Only 22% of developed vaccines are successful, start to finish (Struck, 1996)[^6], which would mean that 4.5 vaccine candidates are needed on average to produce a workable vaccine.

[GSK themselves says](https://ec.europa.eu/research/health/pdf/event17/s3-3-gerald-voss_en.pdf) it can take up to $1B and 20-50 years to create and fully distribute a vaccine at scale.

**What does the historical “outside view” say?**

Besides looking at literature, another potentially good way to learn how long it takes to make a vaccine is to use base rates and look at how long it took historically to make all of the past vaccines.  

This method, however, has a number of limitations. There is a surprising amount of uncertainty about the correct start year of each vaccine, since it is difficult to know what the beginning of a research actually is and the transition from "not researched" to "researched" is very gradual. Also, there are often several distinct strands of research that contribute to the final discovery that can be somewhat overlapping (Light, Andrus, & Warburton, 2009).

When looking at the time between when the viral agent was first linked to the disease and the date that a vaccine has been licensed in the US for a few vaccines, it looks to be an average of 52 years ([Gilmour, 2013](http://vaccineenterprise.org/conference/2013/sites/default/files/AIDS%20VAccine%202013-JG-History%20of%20HIV%20vax%20development_Gilmour%20v5.pdf), slide 3). However, this is misleading as many viral agents were identified before vaccine technology existed in earnest, creating very long lag times before vaccines could be created and inflating the estimate in a way that is not representative of current vaccine manufacturing capabilities.  

It also unclear at what point the research can be said to have ended with a finished vaccine. The most intuitive approach is to use the date of licensure, but this date can vary wildly between countries (sometimes spanning multiple decades) and countries have inconsistent standards for what is needed to license a vaccine. Additionally, many of the earlier vaccines the modern clinical trial and licensing system did not yet exist[^7] and it’s not clear how much additional testing was needed from a prototype vaccine to mass rollout of the vaccine.

Regardless, looking back at history myself for 27 different vaccines[^8], I find the following rough timelines:

*   Rabies - **4 years**, 1881-1885 ([Schwartz, 2001](http://onlinelibrary.wiley.com/doi/10.1046/j.1365-2672.2001.01495.x/full); [Wikipedia](https://en.wikipedia.org/wiki/Rabies_vaccine))

*   Rubella - **7 years**, 1962-1969 ([Wikipedia](https://en.wikipedia.org/wiki/Rubella#History))

*   Pertussis - **8 years**, 1906-1914 ([CDC, 2017](https://www.cdc.gov/vaccines/pubs/pinkbook/pert.html))

*   Measles - **9 years**, 1954-1963 ([Rice, 2017a](https://timelines.issarice.com/wiki/Timeline_of_measles))

*   Influenza - **14 years**, 1931-1945 ([WHO, 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf) , p104; [Wikipedia](https://en.wikipedia.org/wiki/Influenza_vaccine#Origins_and_development))

*   Japanese encephalitis - **20 years**, 1934-1954 ([Artenstein (ed.), 2010](https://smile.amazon.com/Vaccines-Biography-Andrew-W-Artenstein/dp/1441911073), p317; [Barrett, 2014](http://www.who.int/immunization/sage/meetings/2014/october/2_Barrett_JE_SAGE_Oct2014.pdf), p4)

*   Polio - **20 years**, 1935-1955 ([CDC, 2017](https://www.cdc.gov/vaccines/pubs/pinkbook/polio.html); [Wikipedia 1](https://timelines.issarice.com/wiki/Timeline_of_poliomyelitis); [Wikipedia 2](https://en.wikipedia.org/wiki/Polio_vaccine); [Wikipedia 3](https://en.wikipedia.org/wiki/Jonas_Salk#Polio_research))

*   Tuberculosis - **21 years**, 1900-1921 ([Rice, 2017b](https://timelines.issarice.com/wiki/Timeline_of_tuberculosis))

*   Mumps - **22 years**, 1945-1967 ([ProCon, 2017](http://vaccines.procon.org/view.additional-resource.php?resourceID=005969))

*   HPV - **23 years**, 1983-2006 ([WHO, 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf), p116-117; [Wikipedia](https://en.wikipedia.org/wiki/HPV_vaccines#History))

*   Hepatitis A - **24 years**, 1967-1991 ([Melnick, 1995](https://www.ncbi.nlm.nih.gov/pubmed/7876643); [Wikipedia](https://en.wikipedia.org/wiki/Hepatitis_A_vaccine))

*   Rotavirus - **26 years**, 1980-2006 ([Wikipedia 1](https://en.wikipedia.org/wiki/Rotavirus#History); [Wikipedia 2](https://en.wikipedia.org/wiki/Rotavirus_vaccine#History))

*   Smallpox - **26 years**, 1770-1796 ([Boylston, 2012](http://www.jameslindlibrary.org/articles/the-origins-of-vaccination-no-inoculation-no-vaccination/); [Wikipedia](https://en.wikipedia.org/wiki/Smallpox_vaccine))

*   Yellow Fever - **27 years**, 1912-1939 ([Wikipedia](https://en.wikipedia.org/wiki/Yellow_fever_vaccine#History); [Frierson, 2010](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2892770/))

*   Cholera - **30 years**, 1854-1884 ([WHO, 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf), p104; [Wikipedia](https://en.wikipedia.org/wiki/Cholera#Research))

*   Chickenpox - **34 years**, 1954-1988 ([CDC, 2015](https://www.cdc.gov/vaccines/pubs/pinkbook/downloads/varicella.pdf); [Wikipedia](https://en.wikipedia.org/wiki/Varicella_vaccine))[^9]

*   Hepatitis B - **38 years**, 1943-1981 ([CDC, 2017](https://www.cdc.gov/vaccines/pubs/pinkbook/hepb.html))

*   Tick-borne encephalitis - **39 years**, 1937-1976 ([Wikipedia](https://en.wikipedia.org/wiki/Tick-borne_encephalitis_vaccine); [WHO, 2016, Slide 5](http://www.who.int/immunization/research/meetings_workshops/8_HMeyer_zika_june16.pdf); [Baselli, et. al., 2011](https://www.ncbi.nlm.nih.gov/pubmed/21843576))[^10]

*   Diptheria - **40 years**, 1883-1923 ([WHO, 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf), p106; [Rice, 2017c](https://timelines.issarice.com/wiki/Timeline_of_diphtheria)[^11]

*   Tetanus - **40 years**, 1884-1924 ([CDC, 2017](https://www.cdc.gov/vaccines/pubs/pinkbook/tetanus.html))

*   Hib disease - **44 years**, 1933-1977 ([Wikipedia 1](https://en.wikipedia.org/wiki/Haemophilus_influenzae); [Wikipedia 2](https://en.wikipedia.org/wiki/Hib_vaccine))

*   Ebola - **~46? years**, 1976-2022(?) ([Johnson, Lange, Webb, & Murphy, 1977](https://www.ncbi.nlm.nih.gov/pubmed/65661); [Pattyn, et. al., 1977](https://www.ncbi.nlm.nih.gov/pubmed/65663); [Lupton, et. al., 1980](https://www.ncbi.nlm.nih.gov/pubmed/6108462))[^12]

*   HIV - **~46? years**, 1984-2030(?) ([Esparza, 2013](http://www.sciencedirect.com/science/article/pii/S0264410X13005963); [Hecht & Jameson, 2011](http://www.resultsfordevelopment.org/sites/resultsfordevelopment.org/files/Rethink%20HIV%202011%20Assessment%20Paper%20-%20Benefit-cost%20analysis%20of%20AIDS%20Vaccine%20Research.pdf))

*   Typhoid - **58 years**, 1838-1896 ([Wikipedia 1](https://en.wikipedia.org/wiki/Typhoid_vaccine); [Wikipedia 2](https://en.wikipedia.org/wiki/Typhoid_fever#Development_of_vaccination))

*   Malaria - **~58? years**, 1967-2025(?) ([GAVI, 2016](http://www.gavi.org/about/governance/gavi-board/minutes/2016/22-june/minutes/09---malaria-vaccine-pilots---appendices/); [Wikipedia](https://en.wikipedia.org/wiki/Malaria_vaccine#History))

*   Pneumococcal disease - **66 years**, 1911-1977 ([CDC, 2017](https://www.cdc.gov/vaccines/pubs/pinkbook/pneumo.html))

*   Meningitis - **68 years**, 1906-1974 ([Flexner & Jobling, 1907](http://jem.rupress.org/content/jem/10/1/141.full.pdf); [CDC, 2015](https://www.cdc.gov/vaccines/pubs/pinkbook/downloads/mening.pdf))[^13]

Taking these numbers literally, this gives a mean of 31.8 years of development, with a median of 27 years and a standard deviation of 17.7 years. If you exclude the vaccines still under development (HIV, malaria, and ebola), the mean is 29.5 years (median 26, SD 17.4).  

**Conclusion**

It’s unclear what conclusions we should draw from either of these approaches. Firstly, it’s important to keep in mind that these statistics are unlikely to be representative of future vaccines, because the low-hanging fruit is likely already gone, early vaccines did not have to go through the modern clinical trial system, and because modern technology and investment could speed up R&D. On the other hand, modern vaccine development may be sped up by significant advances in technology. Lastly, the vaccines that take the longest are the least likely to have already been developed, simply because they stretch out over more time, which introduces a natural bias toward dealing with "harder" vaccines today above and beyond the "low hanging fruit" factor.

However, if you compare the eight vaccines that started development after 1940 and have completed with the 16 vaccines developed _before_ 1940 and have completed[^14], the difference in completion time is marginally significant at best (t-test p = 0.12[^15]).

Lastly, it’s interesting to see the difference between the timeline pointed to by the academic literature (“12-15 years” for medicine generally and around 20 years for vaccines), the timeline pointed to by GSK (“20-50 years”), and the timeline implied by the historical record (“mean of 31.2 years”). Taken together and weighing these three sources of evidence evenly, this suggests an average of 29 years for the typical vaccine[^16], though with high uncertainty based on uncertainties in each approach and on many particular vaccines not being typical.

**Endnotes**

[^1]: For examples, [reviewing GAVI in 2009 as a potential top charity](http://www.givewell.org/international/charities/GAVI), [co-funding a drug-related intervention with the Gates Foundation](http://www.goodventures.org/research-and-ideas/blog/co-funding-with-the-gates-foundation) in 2012, [funding IDInsight to do an RCT on incentives for vaccines](http://www.givewell.org/charities/IDinsight/september-2014-grant) in 2014, [funding JPAL to do an RCT on vaccines](http://www.givewell.org/JPAL-IRD-grant) in 2015, [funding New Incentives to work on immunization-related conditional cash transfers](http://www.givewell.org/charities/new-incentives/november-2016-grant) in 2016, and [funding Charity Science Health to work on expanding demand for immunizations in India](http://www.givewell.org/charities/charity-science/charity-science-health/november-2016-grant) in 2016.

[^2]: See also [notes on GAVI in particular](http://blog.givewell.org/2011/06/14/gavi-appears-to-be-out-of-room-for-more-funding-good-news/) and [this comment on funding vaccine R&D](http://blog.givewell.org/2017/03/21/march-2017-open-thread/#comment-942811). For more detail, see [GiveWell’s overview of the vaccine funding landscape](http://www.givewell.org/international/charities/vaccination-organizations).

[^3]: [Francis (2010)](http://gsid.org/downloads/successes_and_failures_final.pdf) quotes GAVI as averting 5M deaths against $3.7B in funding, for a cost-effectiveness of $740 per life saved. [Lob-Levyt (2011)](http://rstb.royalsocietypublishing.org/content/royptb/366/1579/2743.full.pdf) quotes GAVI as averting 5.4M vaccine-related deaths against $4491M in vaccine-related spending or $831.67 per life saved. [A GAVI press release](http://www.gavi.org/library/news/press-releases/2010/gavi-alliance-set-to-save-four-million-lives-by-2015/) quotes GAVI as saving 4M lives against $3.7B or $925 per life saved.

[^4]: Except the amount of time to get past clinical trials and registration is more like 6.3 years, on average (Struck, 1996; [Keyhani, Diener-West, & Powe, 2006](https://www.ncbi.nlm.nih.gov/pubmed/16522587); [Waye, Jacobs, & Schryvers, 2013](http://www.tandfonline.com/doi/abs/10.1586/14760584.2013.850035?journalCode=ierv20)).

[^5]: Struck (1996) (Table 4) specifies that vaccines take an average of 2.4 years to go from preclinical trials to Phase I, 2.0 years to go to Phase II from Phase I, 1.8 years to get to Phase III, 1.1 years to get to preregistration, and 1.3 years to get to registration. Each time is conditional on the prior step being successful.

[^6]: Struck (1996) (Table 3) specifies there is a 96% chance of a vaccine moving from registration to launch, a 68% chance of moving from Phase III to launch, a 54% chance of moving from Phase II to launch, a 39% chance of moving from Phase I to launch, and a 22% chance of moving from preclinical to launch. Inverting these probabilities using [math](https://en.wikipedia.org/wiki/Conditional_probability), we can derive a 56% chance of moving from preclinical trials to Phase I, a 72% chance of moving from Phase I to Phase II, a 79% chance of moving from Phase II to Phase III, a 71% chance of moving from Phase III to registration, and a 96% chance of moving from registration to launch.

[^7]: Though it wasn’t until 1959 when a modern scientific vaccine was submitted for licensing after modern scientific scrutiny ([WHO 2009](http://apps.who.int/iris/bitstream/10665/44169/1/9789241563864_eng.pdf), p105).

[^8]: This is not intended to be an exhaustive list of all vaccines, but is intended to be exhaustive of all vaccines that would be considered "important", such as the vaccines on [the WHO list of essential medicines](https://en.wikipedia.org/wiki/WHO_Model_List_of_Essential_Medicines#Vaccines) and notable vaccines under current development.

[^9]: Though the varicella vaccine was not actually licensed in the US until 1995.

[^10]: There was an earlier vaccine, approved in Russia in 1941, that was incubated in a mouse brain and only worked against a few strains. I am unsure how to count this.

[^11]: As a disclaimer, [I paid](http://peterhurford.com/other/donations.html) $400 for the creation of this source via [Vipul Naik](https://contractwork.vipulnaik.com/). While the citation is to Issa Rice, given that it is on his domain, the actual author is [Sebastian Sanchez](https://contractwork.vipulnaik.com/worker.php?worker=Sebastian+Sanchez).

[^12]: While [a candidate ebola vaccine is currently in Phase III trials](https://en.wikipedia.org/wiki/Ebola_vaccine) (see also [WHO, 2015](http://www.who.int/medicines/emp_ebola_q_as/en/)), it is not yet clear whether or not that candidate will succeed, so it is difficult to forecast how long it will take to develop an ebola vaccine. However, analysis in Struck (1996) (Table 4)[5] would suggest there is only ~5 more years left until the ebola vaccine is registered (i.e., registration predicted for 2022) (see also Light, Andrus, & Warburton, 2009). This is a personal prediction with weak confidence and I can't find any public pronouncements from any official organizations or scientists about an estimated license date for an ebola vaccine.

[^13]: This is a good example of how there can be wide uncertainty about when vaccine research started. It's certainly not possible to start work on a vaccine before the cause of the disease is identified, which would be 1887 [when the bacteria was first isolated](https://en.wikipedia.org/wiki/Neisseria_meningitidis#History). Also work would have to have started by 1917, when the first detailed scientific paper on the vaccine was published ([Greenwood, 1917](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2017723/)). However, this gives me a 30 year range within which I am uncertain as to whether research had started or not.

[^14]: I chose 1940 as a split because it felt "modern" enough (corresponding somewhat to the definition of a modern era as post-World War II) while still encompassing enough vaccines to have a reasonable amount on both sides. I did not look at how the numbers played out before committing to my split date.

[^15]: early mean 22.9 years, early median 23.5 years, early SD 10.7 years, late mean 32.8 years, late median 28.5 years, late SD 19.3 years.

[^16]: This is the rounded average of 20 years (academic literature), 35 years (midpoint of GSK's “20-50 years”), and 32 years (retrospective analysis).