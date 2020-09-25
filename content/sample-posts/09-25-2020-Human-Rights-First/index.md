---
title: "Visualizing Police Brutality"
cover: "https://github.com/axefx/axefx.github.io/raw/source/content/sample-posts/09-25-2020-Human-Rights-First/HRF%20DS%20Structure.png"
date: "09/25/20"
category: "Data_Science"
tags:
  - Data Science
---

# Visualizing Police Brutality

Lambda school has a program called Labs, it is designed to partner students with a non profit organization and develop an app that fits the organizations needs. It is meant to give students a hands on experience in working with a client. During my time in Labs I worked with the organization named Human Rights First. Human Rights First is an organization that challenges America to live up to its ideals, with the belief that American leadership is essential to the global struggle for human rights.
The product that the client, Human Rights First, requested for students to build was a web app that visualizes the conversation that happens on social media regarding any police brutality incidents happening in the United States. The client wants to be able to have a resource that journalists, activists, and lawyers can use to have an overview of incidents people are sharing on social media. The product I helped develop was the data science api, that handles gathering data, cleaning and filtering data, feature development and visualization. Some initial concerns regarding the projects were being able to get access to social media and its data.
In order to take on this project it was necessary to really have a clear roadmap of the features needed to deliver, something that was really difficult with all the uncertainties with data access. As a team we broke down the roadmap into actionable tasks including lots of research, filling in all the blanks in between inception and deployment working with what we had. At first iteration we decided to outsource the data access problems and found a very helpful api from another non profit organization that shared police incidents as it was reported to them. This resource allowed us to get started with feature development on already processed data.

Categorizing Police Brutality
I quickly found out that this project was going to be really heavy on using natural language processing tools. Although the main goal was to visualize the data on a map, in order to achieve a useful user experience we found that we needed to categorize each incident with the type of force that was used in the incident. This was quite a challenge since the data we were working with did not include categories, therefore we did not have training data to use on a predictive model. After some research and guidance from leads we found a tool called Snorkel. Snorkel seems to be quite new and cutting edge, it is considered to be a sort of weak supervision predictive model that is used to create labels that can then be used to train a more robust predictive model. Accepting the challenge to learn a new tool I read the documentation and labeled 70 percent of the data.

Current State
A major step in the right direction was completed when we built a training dataset with labels of the type of force in the incident. The next step was to build a predictive model that we can hook up to incoming data from the outsourced api. The model is still in development but as of now we have labeled data of police incidents that have location coordinates and being visualized using the plotly mapping library. Although it is not a dynamic import of data as of now it was essential to deploy and provide our frontend team this achieved state so they can too have a view of the horizon of what it can look like when finished. This is really helpful to encounter and find problems that might be lurking in the future.

It has been a great pleasure working on this project on a very important and current topic. Stay tuned for more progress and updates.
