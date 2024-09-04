const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function toLowerCase() {
  let ch = "Q";
  let lowerchar;

  if (ch >= "a" && ch <= "z") {
    lowerchar = ch;
  } else {
    let temp = String.fromCharCode(
      ch.charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0)
    );
    lowerchar = temp;
  }

  console.log("Character is ", lowerchar);
}

function toLowerCase1(ch) {
  let lowerchar;

  if (ch >= "a" && ch <= "z") {
    lowerchar = ch;
  } else {
    let temp = String.fromCharCode(
      ch.charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0)
    );
    lowerchar = temp;
  }

  return lowerchar;
}

function findMaxMin() {
  const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

  if (arr.length === 0) {
    return "Array is empty.";
  }

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log("Maximum: ", max);
  console.log("Minimum: ", min);
}

function reverseArray() {
  const arr = [5, 4, 10, 2, 90];

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  console.log("Reversed Array: ", arr);
}

function kthMaxMin() {
  let arr = [5, 4, 10, 2, 90];
  let k = 2;

  arr.sort((a, b) => a - b);

  const kthMax = arr[arr.length - k];
  const kthMin = arr[k - 1];

  console.log("Kth max and min element: ", kthMax, kthMin);
}

function moveNegatives() {
  let arr = [1, -2, -3, 4, -5, 6, -7, 8, 9];
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] < 0) {
      left++;
    } else if (arr[right] >= 0) {
      right--;
    } else {
      // swap left and right
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  console.log("Array after moving negatives: ", arr);

}

function sort012(){
    let arr = [2, 0, 1, 2, 0, 1, 2, 0, 1];
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high){
        switch (arr[mid]) {
            case 0:
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
                break;
            case 1:
                mid++;
                break;
            case 2:
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
                break;
        }
    }

    console.log("Sorted array 012", arr);
}

function findUnion(arr1, arr2){
    let i = 0, j = 0;
    let unionArr = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            if(unionArr[unionArr.length - 1] !== arr1[i]){
                unionArr.push(arr1[i]);
            }
            i++;
            j++;
        } else if(arr1[i] < arr2[j]){
            if(unionArr[unionArr.length - 1] !== arr1[i]){
                unionArr.push(arr1[i]);
            }
            i++;
        } else {
            if(unionArr[unionArr.length] - 1 !== arr2[i]){
                unionArr.push(arr2[i]);
            }
            j++;
        }
    }

    while(i < arr1.length){
      if(unionArr[unionArr.length - 1] !== arr1[i]){
        unionArr.push(arr1[i]);
      }
      i++;
    }


    while(j < arr2.length){
      if(unionArr[unionArr.length - 1] !== arr2[j]){
        unionArr.push(arr2[j]);
      }
      j++;
    }

    return unionArr;

}

function findIntersection(arr1, arr2){
    let i = 0; j = 0;
    let intersectionArr = [];

    while(i < arr1.length && j < arr2.length){
      if(arr1[i] === arr2[j]){
        if(intersectionArr[intersectionArr.length - 1] !== arr1[i]){
          intersectionArr.push(arr1[i]);
        }
        i++;
        j++;
      } else if(arr1[i] < arr2[j]){
        i++;
      } else {
        j++;
      }
    }

    return intersectionArr;
}

function findUnionIntersection(){
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [2, 3, 5, 7];

    const unionResult = findUnion(arr1, arr2);
    const IntersectionResult = findIntersection(arr1, arr2);

    console.log("Union: ", unionResult);
    console.log("Intersection: ", IntersectionResult);

}

function findMissingNumber(){
  const arr = [1, 2, 4, 5, 6];
  const n = arr.length + 1;
  const totalSum = (n * (n + 1))/2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  const missingNumber = totalSum - arrSum;

  console.log("The missing number is: ", missingNumber);

}

function findSubArrayWithSum(){
  const arr = [1, 4, 20, 3, 10, 5];
  const targetSum = 33;
  let start = 0;
  let currentSum = 0;
  let subarray = [];

  for(let end = 0; end < arr.length; end++){
    currentSum += arr[end];

    while(currentSum > targetSum && start <= end){
      currentSum -= arr[start];
      start++;
    }

    if(currentSum === targetSum){
      subarray = arr.slice(start, end + 1);
      break;
    }
  }
  console.log("SubArray with the given sum: ", subarray);
}

function maxSubArraySum(){
  const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let maxSoFar = arr[0];
  let currentMax = arr[0];

  for(let i = 0; i < arr.length; i++){
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }

  console.log("The largest sum of contiguos subarray is: ", maxSoFar);

}

function findLongestConsecutiveSubSequence(){
  const arr = [100, 4, 200, 1, 3, 2];
  let set = new Set(arr);
  let longestStreak = 0;

  for(let num of arr){
    if(!set.has(num - 1)){
      let currentNum = num;
      let currentStreak = 1;

      while(set.has(currentNum + 1)){
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  console.log("Longest consecitve sequence length: ", longestStreak);
}

function reverseArrayAlgo(arr, start, end){
    while(start < end){
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
}

function rotateArray(arr, k){
  const n = arr.length;
  k = k % n;
  reverseArrayAlgo(arr, 0, n - 1);
  reverseArrayAlgo(arr, 0, k - 1);
  reverseArrayAlgo(arr, k, n - 1);

  return arr;
}

function rotatedArray(){
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  const rotatedItems = rotateArray(arr, k);
  console.log("Rotated array: ", rotatedItems);
}

function main() {
  console.log("\nSelect the items which you want to print from below list: \n");
  console.log();
  console.log("\n1. Find the maximum and minimum element in an array.\n");
  console.log("\n2. Reverse an array.\n");
  console.log("\n3. Find the Kth max and min element of an array\n");
  console.log("\n4. Move all negative numbers to one side of the array.\n");
  console.log("\n5. Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).\n");
  console.log("\n6. Union and Intersection of Two Sorted Arrays\n");
  console.log("\n7. Find the missing number in an array of size n containing numbers from 1 to n.\n");
  console.log("\n8. Find the subarray with a given sum.\n");
  console.log("\n9. Largest sum contiguous subarray (Kadane's algorithm).\n");
  console.log("\n10. Find the longest consecutive subsequence in an unsorted array.\n");
  console.log("\n11. Implement an algorithm to rotate an array.\n");
  rl.question("", function (num_of_item) {
    var selectedItem = parseInt(num_of_item);
    console.log();
    switch (selectedItem) {
      case 1:
        findMaxMin();
        rl.close();
        break;
      case 2:
        reverseArray();
        rl.close();
        break;
      case 3:
        kthMaxMin();
        rl.close();
        break;
      case 4:
        moveNegatives();
        rl.close();
        break;
      case 5:
        sort012();
        rl.close();
        break;
      case 6:
        findUnionIntersection();
        rl.close();
        break;
      case 7:
        findMissingNumber();
        rl.close();
        break;
      case 8:
        findSubArrayWithSum();
        rl.close();
        break;
      case 9:
        maxSubArraySum();
        rl.close();
        break;
      case 10:
        findLongestConsecutiveSubSequence();
        rl.close();
        break;
      case 11:
        rotatedArray();
        rl.close();
        break;

      default:
        console.log(
          "\nInvalid Number, Please select a number from above given list :)\n"
        );
        rl.close();
        break;
    }
  });
}
main();
