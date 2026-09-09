/* Given an array of numbers, return the second largest unique number. If there are fewer than two unique numbers in the array, return null.

Example 1
Input: numbers = [10,5,20,5,15]
Output: 15
Example 2
Input: numbers = [3,3,3]
Output: null
Constraints
The input `numbers` will be an array of integers.
The array can contain positive, negative, or zero values.
The array length will be between 0 and 1000.  */

//Solution:

function getSecondLargest(numbers) {
    // ১. Set ব্যবহার করে ডুপ্লিকেট সংখ্যাগুলো বাদ দেওয়া
    const uniqueNumbers = Array.from(new Set(numbers));

    // ২. ২টির কম ইউনিক সংখ্যা থাকলে null রিটার্ন করা
    if (uniqueNumbers.length < 2) {
        return null;
    }

    // ৩. বড় থেকে ছোট ক্রমে (Descending order) সাজানো
    uniqueNumbers.sort((a, b) => b - a);

    // ৪. ২য় বৃহত্তম সংখ্যাটি (index 1) রিটার্ন করা
    return uniqueNumbers[1];
}

// Example Test Cases:
console.log(getSecondLargest([10, 5, 20, 5, 15])); // 15
console.log(getSecondLargest([3, 3, 3]));          // null
console.log(getSecondLargest([-10, -5, 0, 5]));    // 0


//Another Method: [Optimal $O(N)$ Solution (Single Pass)অ্যারে সর্ট না করে এক লুপেই $O(N)$ টাইমে সমাধান করার নিয়ম:]

function getSecondLargest(numbers) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of numbers) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num < largest && num > secondLargest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}