# 3: Problem Solving

An algorithm is a process or set of steps to accomplish a certain task

## How to Improve:

- Devise a plan for solving problems
- Master common problem solving patterns

## Understand the Problem

(Check out _How to Solve It_ by George Polya)
Ask yourself these questions:

1.  Can I restate the problem in my own words?
2.  What are the inputs that go into the problem?
3.  What are the outputs that should come from the solution?
4.  Can the outputs be determined from the inputs? Do you have enout information to solve the problem?
5.  How should I label important pieces of data that are part of the problem?

## Explore Concrete Examples

- Helps to understand the problem better
- Provides sanity checks that help your solution show how it should work
- User Stories
- Unit tests

1. Start with simple examples with input and output
2. Progress to more complex examples
3. Explore examples with empty inputs
4. Explore examples with invalid inputs

Example: Write a function that takes in a string and returns cound of each character in the string

1. input: charCount("aaaa") --> output: {a:4, b:0, c:0}
   input: charCount("hello") --> output: {h:1, e:1, l:2, o:1}
2. input: charCount("my phone number is 1234")
3. input: charCount("") --> output: null, undefined, {}

## Break it Down

Little comments for steps to take to get to the answer
Explicitly write out the steps you need to take

- Forces you to think about the code you're going to write
- Helps catch any conceptual issues or misunderstandings before getting into the problem

## Solve and Simplify

If you can't solve the problem, solve a simpler problem (instead of getting stuck on the difficult problem, do what you know how to do while ignoring the harder part of the problem until the end.)

Simplify:

1. Find the core difficulty in what you're trying to do
2. Temporarily ignore the difficulty
3. Write a simplified solution

- often here you'll figure out how the difficulty works

4. Incorporate that difficulty back in

## Look Back and Refactor

Look at individual components, line by line, and see what works well, and what doesn't

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance? (how intuitive is it?)
- Can you use result/method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

# Common Problem Solving Patterns

## Frequency Counter (On<sup>2</sup>)

Comparing two arrays, create two objects to hold each value with the frequency of its occurance. Then compare the two objects of each array to see if the frequencies of each of the values correspond in the way that you're looking for.