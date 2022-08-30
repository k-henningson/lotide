# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @k-henningson/lotide`

**Require it:**

`const _ = require('@k-henningson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: Function to assert that two arrays are equal
* `function2(assertEqual)`: Function to help us test our code, comparing primitive types
* `function3(assertObjectsEqual)`: Function that takes in two objects and console.logs an appropriate message
* `function4(countLetters)`: Function that takes in a sentence (as a string) and returns a count of each of the letters in that sentence
* `function5(countOnly)`: Function that takes in a collection of items and returns a count for the specific subset of those items
* `function6(eqArrays)`: Function that can compare two arrays for a perfect match
* `function7(eqObjects)`: Function that takes in two objects and returns true or false, based on a perfect match
* `function8(findKey)`: Function that takes in an object and a callback, returning the first key for which the callback returns truthy
* `function9(findKeyByValue)`: Function that takes in an object and a value, and returns the first key containing the value
* `function10(head)`: Function that retrieves the first element from the array 
* `function11(letterPositions)`: Function that returns all the indices in the string where each character is found
* `function12(map)`: Function that creates a new array populated with the results of calling a provided function on each element in the array
* `function13(middle)`: Function that returns an array with only the middle element(s)
* `function14(tail)`: Function that retrieves every element except the first element of the array
* `function15(takeUntil)`: Function that will keep collecting items from an array until the callback returns a truthy value
* `function16(without)`: Function that filters our data by removing unwanted items