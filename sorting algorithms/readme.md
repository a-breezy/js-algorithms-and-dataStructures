# Bubble Sort On<sup>2</sup>

Sorting an array by having the largest values bubble to the top

Starting at the beginning of an array: Compare two values, (a, b), if b > a then a is on the left (because it's less) and b on the right. Continue doing this until the array is sorted

To swap values ES5:

```
function swap(arr, idx1, idx2) {
  var temp = arr[indx1];
  arr[idx1] = arr[idx2];
  arr[idx1] = temp;
}
```

ES6

```
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

Note: You only need to swap the two values if idx1 is greater than idx2

Bubble sort function:

```
function bubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i -1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
```

### The General Idea

Behind this there is a nested loop which compares two values and determines if they need to be swapped based on if one is greater than tho other. If they do need to be swapped, one value is held in a temp value and while the other is moved to the value of its index + 1.

### Make it Better

Add a break so that if the loop goes through without finding a value that needs to be swapped, the function ends.

```
function bubbleSort(arr){
  var noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = truel
    for(var j = 0; j < i - 1 ; j++){
      if(arr[j] > arr[j + 1]){
        var temp = arr[j];
        arr[j] = arr[j + 1];
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
```

### Caveate

Bubble sort is a good way to sort arrays generally, however if the array in nearly sorted this meathod will loop through unnecessarily, creating more work for itself.

# Selection Sort On<sup>2

Going through a list or array and sorting based on the smallest value of the array.

## Implemention of Selection Sort

1. Create a loop within a loop.
2. The outer loop is the number that you're comparing to the numbers in the inner loop
3. Set the inner loop to be the outer loop + 1
4. Compare the value of outer loop to inner loop and when a smaller number is discovered set its value to that of the new minimum value
5. After the loop is finished set the new minimum value to the index of the position of the outer loop
6. Return the sorted array

# Insertion Sort On<sup>2</sup>

Inserting elements into their place in an array by comparing one element to another and determining if a swap is necessary. If an element is in the wrong place, iterate through the sorted portion and place element where it goes. Repeat until array is sorted

# Merge Sort (Time complexity: O(n log n) Space complexity: O(n))

A sorting algorithm that takes an array and recursively breaks it into smaller arrays, ultimately of two values. It then sorts those arrays by smallest value before combining it with the larger array that it was initialy divided from. With each combination the array gets sorted to larger values.
