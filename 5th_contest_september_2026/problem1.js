/* Find the Missing Number-1
 
Given an array nums containing n distinct numbers taken from the range [0, n], return the only number in the range that is missing from the array.

Examples
missingNumber([3, 0, 1]);
// => 2
missingNumber([0, 1]);
// => 2
Example 1
Input: nums = [3,0,1]

Output: 2

Explanation: n = 3 since there are 3 numbers. The range is [0, 3]. 2 is missing.

Example 2
Input: nums = [0,1]

Output: 2

Explanation: n = 2 since there are 2 numbers. The range is [0, 2]. 2 is missing.

Constraints
n === nums.length
1 <= n <= 10^4
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

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

// Alternative Solution:
//======================

function missingNumber(nums) {
    let missing = nums.length;
    
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    
    return missing;
}

