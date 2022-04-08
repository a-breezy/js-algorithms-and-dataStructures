# JavaScript Algorithms and Data Structures Masterclass [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A repo following along the Udemy's [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/).




[GitHub Repo of What's Been Learnt](https://github.com/a-breezy/js-algorithms-and-dataStructures)

## Sections (Listed as Completed)

  * [Instructions](#instructions)
  * [Usage](#usage)
  * [Questions](#questions)
  ---
  ### Lessons:
  1. [Big O Notation](#1-big-o-notation)
  2. [Arrays and Objects](#2-arrays-and-objects)
  3. [Performance of Arrays and Objects](#3-performance-of-arrays-and-objects)

## Instructions

No installation required.

Select a concept in the [Sections table](#sections-listed-as-completed) and find the corresponding directory on [GitHub](https://github.com/a-breezy/js-algorithms-and-dataStructures). Hopefully, between the description in this read me and the examples provided in the repo, there will be enough to understand the concepts.

---
## Usage

This is my way of learning and studying to prepare for coding interviews and to better understand computational thinking on the whole.

For a more comprehensive understanding, check out the course itself: [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/).

---
## Questions

[Reach out to me on Twitter](https://twitter.com/a_breezy64)


## 1: Big O Notation

### What is Big O Notation?
A way to guage code performance in terms of time-space complexity.

Numeric representation (a label) for how efficient code is.
How to describe runtime of algorithm growth as input grows

### Benefits of Big O:
- Precise terminology about how code preforms
- Helps show trade-offs between different approaches in code
- Helps identify inefficiencies in code

The goal is to write good code that is fast,less memory intensive, but still readable. **Often good code comes at the expense of readability.**

### Counting Operations, Not Time
When calculating the time-space complexity of code, the number of operations determins the resulting complexity. The number times a machine has to make a calculation is the determining factor.
* Loops make operations exponential, slowing down code 
* Operations are considered: assignments, comparisons, and any mathematical operations (did that help?)

### Types of Big O
O(f(n))
- Linear: f(n) = n --> grows in proportion to n
- Quadratic: f(n) = n^2^ --> grows exponentially to n
- Constant: f(n) = 1 --> remains constant regardless of n
- Logarithmic: f(n) = log~n~--> grows logarithmically
- Other...

### Rule of Thumb:
- Constants don't matter (refer to types above), think of Big O as a big picture view
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in arrays or objects are constant
- In a loop, complexity is the legth of the loop time complexity of whatever is inside the loop

### Space Complexity
Time complexity is analyzing runtime of algorithm as size of inputs increase.

Space complexity is the amount of memory allocated in order to run code of an algorithm. **Auxiliary space complexity** is space of algorithm, not including  space of inputs.

- Primitives (booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (n = string.length)
- Reference types (arrays and objects) are generally O(n), where n is length or number of keys

### Logarithms
The logarithm of a number roughly measures the number of times you can divide the number by 2 before you get a value that's less than or equal to one 

**The inverse of exponents**
log~2~(value) = exponent --> 2(exponent) = value
log~2~(8) = 3 --> 2^3^ = 8

To save on complexity, we say log === log~2~


**Log time complexity is great, second to O(1)**
* Some search algorithms use log time complexity
* Efficient sorting algorithms use logs
* Recursion sometimes uses log space complexity


## 2: Arrays and Objects

### Big O of Objects 
When to use objects:
- When order is irrelevant (meaning there's no beginning or end, because it's a {key: value} pair)
- When fast access, insertion, or removal is important
  - Insertion = O(1)
  - Removal = O(1)
  - Searching = O(N)
  - Access = O(1)
- Methods:
  - Object.keys = O(N)
  - Object.values = O(N)
  - Object.entries = O(N)
  - hasOwnProperty = O(1)
    - boolean search for specific value, returning true or false

### Big O of Arrays
When to use arrays:
- Ordered list (definite beginning and end)
- When fast access, insertion/removal
  - Searching = O(N)
    - To be discussed later
  - Access = O(1)
    - With javascript array, searching by index will immediately return results, rather that iterating through array by index
  - Insertion = depends
    - inserting to beginning of array is difficult because it replaces the past indices -> O(N)
  - Removal = depends
    - removing from beginning poses the same problem as adding to beginning of array -> O(N)
- Methods:
  - Push = O(1)
  - Pop = O(1)
  - Shift = O(N)
    - reindex array
  - Unshift = O(N)
    - reindex array
  - Concat = O(N)
  - Slice = O(N)
  - Spice = O(N)
  - Sort = O(N * log N)
  - forEach/map/filter = O(N)

## 3: Performance of Arrays and Objects