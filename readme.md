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
  3. [Problem Solving](#3-problem-solving)
  4. [Problem Solving Patterns](#3-problem-solving-patterns)

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

## 3: Problem Solving

An algorithm is a process or set of steps to accomplish a certain task

### How to Improve:
- Devise a plan for solving problems
- Master common problem solving patterns

### Understand the Problem
(Check out *How to Solve It* by George Polya)
 Ask yourself these questions:
 1. Can I restate the problem in my own words?
 2. What are the inputs that go into the problem?
 3. What are the outputs that should come from the solution?
 4. Can the outputs be determined from the inputs? Do you have enout information to solve the problem? 
 5. How should I label important pieces of data that are part of the problem?

### Explore Concrete Examples
- Helps to understand the problem better
- Provides sanity checks that help your solution show how it should work
- User Stories
- Unit tests

1. Start with simple examples with input and output
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

Example: Write a function that takes in a string and returns cound of each character in the string
1. input: charCount("aaaa")  --> output: {a:4, b:0, c:0}
  input: charCount("hello") --> output: {h:1, e:1, l:2, o:1}
2. input: charCount("my phone number is 1234")
3. input: charCount("") --> output: null, undefined, {}

### Break it Down
Little comments for steps to take to get to the answer
Explicitly write out the steps you need to take
-  Forces you to think about the code you're going to write
- Helps catch any conceptual issues or misunderstandings before getting into the problem

### Solve and Simplify
If you can't solve the problem, solve a simpler problem (instead of getting stuck on the difficult problem, do what you know how to do while ignoring the harder part of the problem until the end.)

Simplify:
1. Find the core difficulty in what you're trying to do
2. Temporarily ignore the difficulty
3. Write a simplified solution
  - often here you'll figure out how the difficulty works
4. Incorporate that difficulty back in

### Look Back and Refactor
Look at individual components, line by line, and see what works well, and what doesn't
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance? (how intuitive is it?)
- Can you use result/method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## 4: Problem Solving Patterns

### Frequency Counter
Use and object to compare frequencies of certain values
  - Can be O(n) time when done well.
  - Easier solutions are O(n^2^) 

Naive Solution:
  ```
  function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      // if correctIndex is not in array, return false
      if(correctIndex === -1) {
        return false;
      }
      // take correctIndex out of array2 and continue with loop
      arr2.splice(correctIndex,1)
    }
    return true;
  }
  ```
  While this approach works, it's complexity if O(n^2^).

Refactored:
  ```
  function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
      return false;
    }
    // counts frequency of individual arrays
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // count frequency of array 1
    for(let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    // count frequency of array 2
    for(let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    // compare keys of frequencyCounter1 and frequencyCounter2
    for(let key in frequencyCounter1) {
      if(!(key ** 2 in frequencyCounter2)){
        return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
        return false
      }
    }
    return true
  }
  ```
  Time complexity O(n), becuase there are multiple loops that aren't nested

Takeaway: Using objects to hold contents of input, which allows a quick comparison to another input

Example: Anagram 
Can you create a function that can figure out if two words are anagrams?

### Multiple Pointers
Creating pointers/values that correspond to an index/position and move towards beginning, middle, or end based on condition
Very efficient for folving problems with minimal space complexity

Example:
create a function that takes in a sorted array of integers and finds the first pair where the sum is zero. Either return pair of undefined if pair doesnt exist

Naive Solution:
```
function sumZero(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}
```
Time complexity O(n^2^)
Space complexity O(1)

Refactored:
Instead of looping through two arrays, compare the values of opposite sides of the array and move through the array based on having positive or negative remainders

```
function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    let sum = arr[left] + arr[right];
    
    if(sum === 0){
      return[arr[left], arr[right]]
    } else if(sum > 0){
      right--
    } else {
      left++
    }
  }
}
```

Time complexity 0(n)
Space complexity 0(1)

### Sliding Window
Making a window and sliding it depending on conditions

ex: write a function that accepts an array of integers and a number (n), then calculating the maximum sum of n consecutive elements of the array.

```
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
Time complexity O(n)

Instead of looping through the array twice and adding each set of numbers twice, you subtract the first number from the array and add the next number to the array

### Divide and Conquer
Dividing a dataset into smaller chunks and repeating a process within a subset of data (like a sorting algorithm - binary search).
  - Decreases time complexity
  - Check a specific part of a sorted array, if larger than target search smaller, if smaller than target search longer