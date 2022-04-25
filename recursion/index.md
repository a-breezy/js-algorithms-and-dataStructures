# 5: Recursion

## What Is Recursion
A stack data structure
A process/function that calls itself
  - JSON.parse/stringify
  - document.getElementById 
  - Object traversal
  - Complete data structures
  - cleaner version of iteration

## What Happens behind the scene: The CALL STACK
When a function is invoked it's placed on the top of the stack
When there's a return keyword, the top item from the stack is removed
  1. items are added to the stack in the order that they come in.
  2. once and item is complete (by return), the stack moves onto the next item in the stack
  3. each item is 'popped off' in th order that they were 'pushed on'

## The Inner Workings:
Base case: Where the recursion ends
Input: the function that's being called over and over, but with  different input in each call

ex:
function countDown(num){
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  coundDown(num);
}

this function calls itself whenever num is greater than 0, and continues to do so until num is 0.

ex:
function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

this function takes the num and if it's not 1, returns the num plus the sumRange recursive function of whatever num - 1 is. in this way the function takes the first number and adds it to itself minus 1 until it gets to the basecase of num === 1

## Factorial
n! = n * (n - 1) * (n - 1)

ex:
function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num - 1);
}

  - basecase num === 1
  - function multiplies num by itself minus 1 until num is 1

## Problems with Recursive Functions
- No base case (or incorrect base case)
  - creating an infinite loop
- Returning the wrong thing, or forgetting to return
  - the return tells the function to pop something from the call stack. Otherwise there would be stack overflow

Stack Overflow is when there are too many items in the call stack, and calls are overflowing.

## Helper Method Recursion Pattern
Defining a function araound a helper function so that items can be added and stored to an array.

Two functions:
  - Outer function
  - Inner function: A recursive function
Used to compile and array,

```
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}
```

## Pure Recursion
Function itself is self-contained, and is a bit convoluted compared to helper method recursion

```
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```

  1. Everytime this function happens it redefines newArr, but that's ok because it's recursively calling itself when that happens and holding the index of the odd number in the call stack.
  2. It continues to do this until it reaches its base case where the arr.length is 0 (this happens becuase everytime the function calls itself it arr.slice(1), taking the 0 index of the array off and moving to the next one).
  3. Once it arrives at the base case, it starts popping things from the call stack by returning newArr.concat() the number that's been held in the stack