---
title: "K-Nearest Neighbors Classifier"
cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tree_0001.svg/1024px-Tree_0001.svg.png"
date: "06/25/20"
category: "Data_Science"
tags:
  - Data_Science
---

## Using A KNN Classifier

K-nearest neighbor classifier is considered a supervised machine learning algorithm. It is used to solve classification or regression challenges in a data analysis project. One example of a classification challenge is demonstrated in the “iris flower” dataset. The dataset contains data records of different iris plants and their physical measurements as well as the class or type of iris flower it belongs to. This dataset can be used to train a KNN algorithm that can classify the type of a new flower based on its physical properties.

![iris classes](https://www.pngkey.com/png/detail/82-826789_iris-iris-sepal-and-petal.png)
[iris dataset](https://scikit-learn.org/stable/datasets/index.html#iris-dataset)

## What is the algorithm doing?

The K-nearest neighbors (KNN for short) algorithm expects a “K” parameter and its input training data to be vector representations of the data features being analyzed. The “K” refers to the number of neighbors to group by when training and storing the input data. The distance between the data inputs are measured, using different metrics such as **Euclidean distance**, and stores them into memory.![eucledian distance](https://wikimedia.org/api/rest_v1/media/math/render/svg/795b967db2917cdde7c2da2d1ee327eb673276c0)
KNN algorithm can make use of a K dimensional tree (KD Tree) as its data structure. A KD tree is a “binary tree”, in which every leaf node is a k-dimensional point in a space matrix. The KD tree and the distance calculated can be used to store them as “neighbors” of each other. After training your algorithm to the dataset it can be used to find a classification of new data input. The KNN classifier uses a majority of votes method, by using the nearest neighbors returned by the data structure, to classify the new data point. The accuracy is impacted by the parameter “K” which groups which points should be considered neighbors, using an odd value for k helps avoid ties in votes.

<div style="width:60%;padding:5px5px;margin:auto;">

![kd-tree](https://raw.githubusercontent.com/axefx/axefx.github.io/source/content/sample-posts/06–25-2020-KNearest_Neighbors/kd-tree.png)

</div>

## Implementing A Simple KNN in python

### Dependencies:

- KD tree data structure from scipy
- Counter from python collection

### Description:

KNN algorithm as a python class  
Takes k parameter in class instantiation

- Fit method
  - load X and y inputs into class variables
  - pass X into the KD tree as class variable
- Predict method
  - For each predict input query and save nearest_neighbors to class variable
  - Create a list of labels from the nearest_neighbors
  - Return the result of majority vote method on nearest_neighbors
- Majority vote method
  - Use counter to count all labels of nearest_neighbors
  - Use the most_common method
  - repeat counting for all labels
- kneighbors method
  - Does predict function and returns the nearest_neighbor class variable

## Check out the [colab notebook](https://colab.research.google.com/drive/1fIKfky_xc0U4Rw5n2hIoVRS7sH9I0qwV?usp=sharing)

## Check out the [github repo](https://github.com/axefx/CS-Data-Science-Build-Week-1/blob/master/src/knn.py)
