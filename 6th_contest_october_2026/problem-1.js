/* Merge Two Sorted Arrays */

/*Write a function mergeSortedArrays that takes two arrays of numbers, each already sorted in ascending order, and merges them into a single sorted array.

Your solution should take advantage of the fact that both input arrays are already sorted.

Examples
mergeSortedArrays([1, 3, 5], [2, 4, 6]);
// => [1, 2, 3, 4, 5, 6]
mergeSortedArrays([1, 2, 3], [4, 5, 6]);
// => [1, 2, 3, 4, 5, 6]
Example 1
Input: arr1 = [1,3,5], arr2 = [2,4,6]

Output: [1,2,3,4,5,6]

Explanation: Interleaved elements from both arrays in sorted order.

Example 2
Input: arr1 = [1,2,3], arr2 = [4,5,6]

Output: [1,2,3,4,5,6]

Explanation: All elements of the first array are smaller than all elements of the second array.

Constraints
0 <= arr1.length, arr2.length <= 10^5
-10^9 <= arr1[i], arr2[j] <= 10^9
arr1 and arr2 are guaranteed to be sorted in ascending order.*/

//SOLUTION:

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Test cases to show the answer
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]