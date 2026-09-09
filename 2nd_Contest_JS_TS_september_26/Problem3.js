 /* Given a string, find the first character that appears only once in the string. If no such character exists, return -1.

Example 1
Input: s = "aabbcdeff"

Output: "c"

Example 2
Input: s = "aabb"

Output: -1

Constraints
The input string `s` will consist of lowercase English letters.
`s` length will be between 0 and 1000. */

//==========
// SOLUTION
//==========

function firstUniqChar(s) {
    const charCount = {};

    // ১. প্রতিটি অক্ষরের ফ্রিকোয়েন্সি গণনা করা
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // ২. প্রথম ইউনিক অক্ষরটি খুঁজে বের করা
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // ৩. কোনো ইউনিক অক্ষর না থাকলে -1
    return -1;
}

// Example Test Cases:
console.log(firstUniqChar("aabbcdeff")); // "c"
console.log(firstUniqChar("aabb"));      // -1



// One more method..

