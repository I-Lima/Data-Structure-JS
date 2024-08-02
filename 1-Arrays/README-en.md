[Leia esta página em português](./README.md)

# Arrays

**Summary**

- [Arrays](#arrays)
  - [Introduction](#introduction)
  - [Why Should We Use Arrays?](#why-should-we-use-arrays)
  - [Creating and Initializing Arrays](#creating-and-initializing-arrays)
  - [Adding Elements](#adding-elements)
    - [Appending at the End - push](#appending-at-the-end---push)
  - [Adding at the First Position - unshift](#adding-at-the-first-position---unshift)
  - [Removing Elements](#removing-elements)
    - [Removing an Element from the End - pop](#removing-an-element-from-the-end---pop)
    - [Removing an Element from the First Position - shift](#removing-an-element-from-the-first-position---shift)
  - [Adding and Removing from a Specific Position - splice](#adding-and-removing-from-a-specific-position---splice)
  - [Iterating through two-dimensional Arrays](#iterating-through-two-dimensional-arrays)
  - [Multidimensional Arrays](#multidimensional-arrays)
  - [Array Methods](#array-methods)
    - [Concatenation - concat](#concatenation---concat)
    - [Iteration](#iteration)
      - [Every](#every)
      - [Some](#some)
      - [ForEach](#foreach)
      - [Map](#map)
      - [Filter](#filter)
      - [Reduce](#reduce)
    - [Sorting Elements](#sorting-elements)
      - [Reverse](#reverse)
      - [Sort](#sort)
      - [Custom](#custom)
    - [Search - index, indexOf](#search---index-indexof)
    - [Converting an Array to a String - toString, join](#converting-an-array-to-a-string---tostring-join)
  - [TypedArray Class](#typedarray-class)

## Introduction

An Array is the simplest possible data structure in memory. This array stores values that are all of the same type sequentially. Although JavaScript allows us to create arrays with values of distinct types, we should not do so.

## Why Should We Use Arrays?

Arrays are useful for several reasons:

- Storing multiple values
- Accessing elements
- Simplified iteration
- Flexibility
- Data manipulation
- Memory efficiency

## Creating and Initializing Arrays

```
let daysOfWeek = new Array();
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

let daysOfWeek = [];
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
```

## Adding Elements

Adding elements to an array is not difficult; however, these operations can have their subtleties.

### Appending at the End - push

If we want to add a new element to this array, all we need to do is reference the last free position in the array and assign a value to it.

> In JavaScript, an array is a mutable object. We can easily add new elements to it. The object will dynamically grow as new elements are added.

JavaScript's API also has a method called **push**, which allows us to append new elements to the end of an array.

 ```
  numbers.push(11);
  numbers.push(12, 13);
 ```

## Adding at the First Position - unshift

For this, we initially need to make the first position free by shifting all elements to the right.

JavaScript's class also has a method called **unshift** which inserts the values passed as arguments to the method at the beginning of the array.

```
  numbers.unshift(-2);
  numbers.unshift(-4, -3);
```

## Removing Elements

Removing elements from an array is not difficult; however, these operations can have their subtleties.

### Removing an Element from the End - pop

The **pop** method removes the last element from an array and returns that element.

```
  numbers.pop();
```

> The **push** and **pop** methods allow an array to emulate a basic stack.

### Removing an Element from the First Position - shift

The **shift** method removes the first element from an array and returns that element.

```
  numbers.shift();
```

> The methods **shift** and **unshift** allow an array to emulate a basic queue data structure.

## Adding and Removing from a Specific Position - splice

The **splice** method can be used to remove an element from an array by simply specifying the position/index from which we want to make the removal and the number of elements we would like to remove.

```
  numbers.splice(5,3);
```

This code will remove three elements starting from index 5 in our array. This means that numbers[5], numbers[6], and numbers[7] will be removed from the numbers array.

> The **delete** operator can also be used to remove an element from an array. However, the array position will have the value undefined, similar to executing numbers[0] = undefined, and we would need to re-index the array. For this reason, we should always use the **splice**, **pop**, or **shift** methods to remove elements.
 ---

We can also use the **splice** method to insert elements into the array:

```
 numbers.splice(5, 0, 2, 3, 4);
```

The first argument of the method is the index from which we want to insert elements. The second argument is the number of elements we want to remove (in this case, we don't want to remove any, so we pass the value 0). From the third argument onward, we have the values we want to insert into the array (the elements 2, 3, and 4).

## Iterating through two-dimensional Arrays

It is necessary to iterate through all rows and columns using a nested **for** loop. For this, we use an outer loop for rows represented by variable **i** and an inner loop for columns represented by variable **j**.

> To display a two-dimensional array in the browser console, we can use the statement **console.table(bidiArray)**. This provides a more user-friendly output.

> Two-dimensional arrays are the most common.

## Multidimensional Arrays

We use the same logic for two-dimensional arrays. We just need to add an additional **for** loop for variable **z**, representing the depth of the matrix.

## Array Methods

Arrays in JavaScript are quite interesting because they are highly effective and have more features available than primitive arrays in other languages.

|  Method  |                             Description                             |
|:--------:|-------------------------------------------------------------------|
|concat    |Concatenates multiple arrays and returns a copy of the concatenated arrays.   |
|every     |Iterates over all elements of the array, checking for a desired condition (function) until false is returned. |
|filter    |Creates an array with all elements that evaluate to true by the specified function. |
|forEach   |Executes a specific function on each element of the array.           |
|join      |Joins all elements of the array into a string.                  |
|indexOf   |Searches the array for specific elements and returns their position. |
|lastIndexOf|Returns the position of the last item in the array that matches the search criterion.|
|map  |Creates another array from a function containing the criterion/condition and returns the array elements that match the criterion. |
|reverse   |Reverses the array, making the last item the first and vice versa. |
|slice     |Returns a new array from the specified index.            |
|some      |Iterates over all elements of the array, checking for the desired condition (function) until true is returned.|
|sort      |Sorts the array in alphabetical order or according to the specified function. |
|toString  |Returns the array as a string.                           |
|valueOf   |Similar to the toString method, returns the array as a string. |

### Concatenation - concat

Consider a scenario where you have different arrays and need to join them all into a single array. Fortunately, JavaScript already has a method called **concat** that can do this for us.

We can pass as many arrays and objects/elements as we want to this method. The arrays will be concatenated into the specified array in the order the arguments are passed to the method.

### Iteration

JavaScript has some built-in iteration methods that can be used with arrays.

#### Every

The **every** method iterates through the array elements until the function returns false.

#### Some

The **some** method iterates through the array elements until the function returns true.

#### ForEach

If we need to iterate through the entire array, regardless of anything else, we can use the forEach function. The result will be the same as using a **for** loop.

#### Map

The **map** method creates a new array based on elements of the original array by applying a function to each of them. It does not alter the original array but creates and returns a new array with the results of the function applied to each element.

#### Filter

The **filter** method returns a new array with elements for which the function returned true.

#### Reduce

The **reduce** method takes a function with the following parameters: previousValue, currentValue, index, and array. The index and array parameters are optional, so it is not necessary to pass them if they are not used.

> This can be very useful if we want to sum all values in an array.

### Sorting Elements

#### Reverse

The **reverse** method reverses the items in an array. The first element becomes the last, and the last becomes the first.

#### Sort

The **sort** method sorts the elements of the array itself and returns the array.

> This happens because the method arranges elements in lexicographical order and assumes all elements are strings.

#### Custom

We can sort an array containing any type of object, and we can create a function to compare elements according to what is needed. For example, suppose there is a Person object with name and age, and we want to sort the array according to the person's age.

### Search - index, indexOf

We have two options for search: the **indexOf** method, which returns the index of the first element matching the passed argument, and **lastIndexOf**, which returns the index of the last found element.

### Converting an Array to a String - toString, join

If we want to display all elements of the array as a single string, we can use the **toString** method.

If we want to separate the elements with a different separator, for example, -, we can use the **join** method.

> This can be useful if we need to send the array content to a server or if that content needs to be decoded.

## TypedArray Class

We can store any type of data in JavaScript arrays. This is because JavaScript arrays are not strongly typed like in other languages. TypedArray was created so that we could work with arrays containing a single type of data.

| TypedArray       | Description                                                 |
|:---------------: | --------------------------------------------------------- |
|Int8Array         |8-bit signed integer, using two's complement.   |
|Uint8Array        |8-bit unsigned integer.                               |
|Uint8ClampedArray |8-bit unsigned integer.                               |
|Int16Array        |16-bit signed integer, using two's complement.  |
|Uint16Array       |16-bit unsigned integer.                              |
|Int32Array        |32-bit signed integer, using two's complement.  |
|Uint32Array       |32-bit unsigned integer.                              |
|Float32Array      |IEEE standard 32-bit floating point number.         |
|Float64Array      |IEEE standard 64-bit floating point number.         |

> Typed arrays are great for working with WebGL APIs, manipulating bits, and handling files and images. These arrays work exactly like simple arrays.
