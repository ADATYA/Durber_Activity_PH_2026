/* Longest Increasing Streak*/
/* Given an array of numbers, return the length of the longest contiguous streak in which each number is strictly greater than the previous number.

If the input array is empty, return 0.

Examples
longestIncreasingStreak([1, 2, 3, 1, 2]);
// => 3 (streak [1, 2, 3])
longestIncreasingStreak([5, 4, 3, 2, 1]);
// => 1 (no adjacent element is strictly greater)
Example 1
Input: nums = [1,2,3,1,2]

Output: 3

Explanation: The subarray [1, 2, 3] has length 3 and is strictly increasing.

Example 2
Input: nums = [5,4,3,2,1]

Output: 1

Explanation: No element is greater than its previous element, so any single element of length 1 is the longest streak.

Constraints
0 <= nums.length <= 100_000
-10^9 <= nums[i] <= 10^9

 */

//SOLUTION:
function longestIncreasingStreak(nums) {
    if (!nums || nums.length === 0) return 0;

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength++;
        } else {
            currentLength = 1; // Reset streak if not strictly greater
        }
        
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

//TEST:

console.log(longestIncreasingStreak([1, 2, 3, 1, 2])); // Output: 3 ([1, 2, 3])
console.log(longestIncreasingStreak([5, 4, 3, 2, 1])); // Output: 1 ([5], etc.)
console.log(longestIncreasingStreak([10, 20, 30, 40, 50])); // Output: 5 ([10, 20, 30, 40, 50])
console.log(longestIncreasingStreak([])); // Output: 0 (Empty array)
console.log(longestIncreasingStreak([5])); // Output: 1 (Single element)