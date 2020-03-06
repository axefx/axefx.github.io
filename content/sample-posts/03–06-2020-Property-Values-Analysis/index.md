---
title: "Property Values Analysis"
cover: "https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/03–06-2020-Property-Values-Analysis/average-totalvalues.png"
date: "03/06/20"
category: "Data_Science"
tags:
  - Data_Science
---

# 2019 Property values in Diamond Bar, CA

## Overview

In 2019, as provided by the [Los Angeles county data portal](https://data.lacounty.gov/Parcel-/Assessor-Parcels-Data-2019/csig-gtr7), there were 46,756 accessor parcel records for the zip code 91765.
Within the zip code 91765 the main city located there is Diamond Bar, CA. As I continued my analysis my main question was what is the average price of homes and how affordable are they.

## Location

<div style="width:50%;float:right;padding:0px 5px">

![location-diamond-bar](https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/03–06-2020-Property-Values-Analysis/diamond-bar-location.png)

</div>

According to Wikipedia, "Diamond Bar is a city in eastern Los Angeles County, California, United States.[9] As of the 2010 census it had a population of 55,544,[10] and in 2018 the population was estimated to be 56,275." <a href='https://en.wikipedia.org/wiki/Diamond_Bar,_California'>[1]</a>

## Average Prices

In the accessor records, I found out of the different types of use cases that 97% were specifically used for Single Family Residences.
When used as a family residence, I found that the building types were 25% were condos and 72% Single Family Residence type.

<div style="float:left;padding:0px 5px">

![average-totalvalues](https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/03–06-2020-Property-Values-Analysis/average-totalvalues.png)

</div>

After narrowing down the data, I found that Single Family Residence buildings had an average total value of about \$579,819.
On the other side condos had an average total value of about 343,247.

## Affordability

![affordability](https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/03–06-2020-Property-Values-Analysis/affordability.png)

After calculating some monthly payments of household incomes and using the recommended 30% of your yearly income for your house payments, I analysed those results against the data.
In the city of Diamond Bar, 42% of Single Family Residences were considered affordable with a minimum income of 50,000 a year and a down payment of 20%.
26% of the of those residences fall under the range between 50,000 and 75,000 of yearly income.
