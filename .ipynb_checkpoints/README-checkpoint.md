# Project 2: Smart Trader

### Overview
In this project, we construct a "Smart Trader" that uses a trading algoritm that will predict Buy and Sell opportunities for both Bitcoin and Ethereum. We create our own FNG Index that is used in our machine learning (XGBoost) model to train and test alongside Bitcoin Close prices.

## Relevant Links
### Google Colab
[Sentiment Analysis](https://colab.research.google.com/drive/1m0iSLzL3yKsciAHXnXDg5epechfGB8gJ?usp=sharing)

### Google Slides
[Presentation](https://docs.google.com/presentation/d/1lwpJPOzr5rPNqX-f9l9oMDTmFlHSENj9t5oyqD06Tdk/edit?usp=sharing)

## Challenge
### Sentiment Analysis
When using stopwords, there seems to be an AttributeError when running the SentimentIntensityAnalyzer. 

AttributeError: 'list' object has no attribute 'encode'