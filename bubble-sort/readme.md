### Bubble Sort
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