/* 
=============
Solution Code
=============
*/

function missingNumber(nums) {
    const n = nums.length;
    // Calculate the expected sum of numbers from 0 to n using Gauss's formula
    const expectedSum = (n * (n + 1)) / 2;
    // Calculate the actual sum of the elements present in the array
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    // The difference between expected sum and actual sum is the missing number
    return expectedSum - actualSum;
}

// Test cases for verification

// Example 1: Numbers should be [0, 1, 2, 3], missing 2
const nums1 = [3, 0, 1];
console.log("Example 1 (Missing Number):", missingNumber(nums1)); 
// Output: 2

// Example 2: Numbers should be [0, 1, 2], missing 2
const nums2 = [0, 1];
console.log("Example 2 (Missing Number):", missingNumber(nums2)); 
// Output: 2

// Example 3: Numbers should be [0 to 9], missing 8
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log("Example 3 (Missing Number):", missingNumber(nums3)); 
// Output: 8