# 6: Search

## Linear Search
Going through an array, checking every item in the order that it comes up

ex:
```
function linearSearch(arr, val){
  for(var i = 0; i < arr.length; i++){
    if(arr[i]=== val) return i;
  }
  return -1
}
```

## Binary Search
Going through a sorted array searching in the middle and comparing the result to whatever is being searched for. Then searching again between that number and whatever direction the searched for number
  - must be a sorted array

ex:
```
function binarySearch(arr, ele){
  var start = 0;
  var end = arr.length -1;
  var middle = Math.floor((start + end) / 2);

  while(arr[middle] !== ele && start <= end) {
    if(ele < arr[middle]){
      end  = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] == ele){
    return middle
  }
  return -1;
}
```

or

```
function binarySearch(arr, ele){
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== ele && start <= end) {
    if(ele < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === ele ? middle : -1;
}
```

Big O for binary search: Best case is O(1), worst case O(log n)

## String Search
Find a string within a longer string and count the amount of occurances of said string


```
function naiveSearch(long, short){
  var count = 0;
  for(var i = 0; i < long.length; i++){
    for(var j = 0; j < short.length; j++){
      if(short[j] !== long[i + j]){
        break;
      }
      if(j === short.length -1){
        count ++
      }
    }
  }
}
```