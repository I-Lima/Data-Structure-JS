[Leia esta página em português](./README.md)

# Set

**Summary**

- [Set](#set)
  - [Introduction](#introduction)
  - [Methods](#methods)
  - [Applications](#applications)

## Introduction

A set is an unordered collection of items consisting of unique elements. This data structure employs the same mathematical concept as finite sets. In mathematics, a set also features some basic operations such as union, intersection, and difference.

> You can also think of a set as an array without repeated elements and without the concept of order.

The set data structure doesn't allow duplicate elements. However, in mathematics, there's a concept called a multiset, which permits the insertion of the same element into the set even if it has already been inserted before. Multisets (or bags) can be very useful for counting how many times an element is present in a set. They are often applied in database systems.

## Methods

- add: Adds an element to the set.
- delete: Removes an element from the set.
- has: Returns true if the element is in the set, and false otherwise.
- clear: Removes all elements from the set.
- size: Returns the size of the set.
- values: Returns an array with all the values that are in the set.
- insert: Given two sets, returns a new set with elements present in both sets.
- union: Given two sets, returns a new set with elements from both specified sets.
- difference: Given two sets, returns a new set with all elements present in the first set but not in the second.
- isSubsetOf: Confirms whether a given set is a subset of another.

> We'll use an object to represent our set instead of using an array. However, we could also have used an array in this implementation.

## Applications

One of the main applications in computer science occurs in databases, which form the foundation of most applications. Sets are used in query design and processing. When creating a query to retrieve a set of data in a relational database (such as Oracle, Microsoft SQL Server, MySQL, and so on), we design the query using set notation, and the database will also return a dataset.

When creating an SQL query, we can specify whether we want to read all the data from a table or only a subset of it. We can also obtain data that is common to two tables, which is present only in one table (and not in the other) or in both. These operations are known in the SQL world as joins, and the basis of SQL joins are set operations.
