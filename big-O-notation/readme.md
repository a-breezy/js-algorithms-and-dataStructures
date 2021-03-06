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

