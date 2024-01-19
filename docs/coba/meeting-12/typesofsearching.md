---
layout: doc
title: Searching - Types of Searching

prev:
    text: Introduction
    link: ./introduction

next:
    text: Examples of Searching
    link: ./examples
---

# Types of Searching

## Linear Searching
- This method involves checking each element in a sequence one by one until the desired element is found or the entire sequence is traversed. It's simple but may be inefficient for large datasets. Time complexity: O(n).

## Binary Searching
- Specifically for sorted arrays, this algorithm continually divides the dataset in half and checks if the desired element lies in the first or second half. It's highly efficient but requires the data to be sorted. Time complexity: O(log n).

## Hashing
- Utilizes hash functions to map keys to their associated values in a data structure. It directly retrieves the element based on its hash value, making it very efficient for retrieval, especially in average-case scenarios. Time complexity: O(1) on average.

## Tree-Based Searches
- These searches involve storing elements in a hierarchical tree structure, facilitating efficient search by traversing the tree based on comparisons of values. Efficient for organized storage and search. Time complexity: O(log n) for balanced trees, but can degrade to O(n) for unbalanced ones.