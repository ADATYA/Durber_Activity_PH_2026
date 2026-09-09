/* ## Reverse Each Word

Given a string, reverse each word in the string while maintaining the original order of words and spaces.

Examples
reverseEachWord("Hello World");
// Expected output: "olleH dlroW"

reverseEachWord("JavaScript is fun");
//Expected output: "tpircSavaJ si nuf"
Example 1
Input: str = "Hello World"

Output: "olleH dlroW"

Example 2
Input: str = "JavaScript is fun"

Output: "tpircSavaJ si nuf"

Constraints
The input `str` will always be a string. */

//Solution:


function reverseEachWord(str) {
    return str
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

// Example 1
console.log(reverseEachWord("Hello World")); 
// Output: "olleH dlroW"

// Example 2
console.log(reverseEachWord("JavaScript is fun")); 
// Output: "tpircSavaJ si nuf"

