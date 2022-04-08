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