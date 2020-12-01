# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @sepehrsobhani/lotide`

**Require it:**

`const _ = require('@sepehrsobhani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(countLetter)`: This function takes a string(or sentence) and returns the total number of each distincted character in that sentence.
- `function2(countOnly)`: This function takes an array of some names as the first argument and some specific names to count inside of the given array and returns the number of that name if exists.
- `function3(findKey)`: This function takes an object as the first argument and a callback function as the second one to find the specific property of that object based on the callback.
- `function4(findKeyByValue)`: This function takes an object as the first argument and a value to search as the second argument and returns if existed.
- `function5(flatten)`: This function takes a nested array and returns a simple 1D array.
- `function6(head)`: This function takes an array and returns the first ellement of that array.
- `function7(letterPositions)`: This function takes a string or sentence and returns the first occurrence of a given character in the sentence.
- `function8(map)`: This function takes an array as the first argument and a callback function as the second one and assign that callback function to the given array.
- `function9(middle)`: This function takes an array and returns the middle element of that array(if the length of array is even it returns the average of both middle elements).
- `function10(tail)`: This function takes an array and returns all elements after the first element as a new array.
- `function11(takeUntil)`: This function takes an array as the fisrt argument and a callback function as the second one and returns a new array of the same elements until the first occurrence of a given element.
- `function12(without)`: This function takes two array and returns the first array without elements inside of the second array.
