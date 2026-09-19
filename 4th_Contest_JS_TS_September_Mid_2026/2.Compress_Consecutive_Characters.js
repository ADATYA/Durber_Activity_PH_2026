/* Write a function that takes a string and replaces consecutive repeating characters with the character followed by the count. If a character appears only once, do not append a number.

Examples
compressCharacters("aaabbc")
// Expected output: "a3b2c"

compressCharacters("hello")
// Expected output: "he2llo"
Example 1
Input: str = "aaabbc"

Output: "a3b2c"

Example 2
Input: str = "hello"

Output: "hel2o"

Constraints
The input string `str` will contain only lowercase English letters.
The length of `str` will be between 0 and 1000 characters. */


//=============
//SOLUTION CODE
//=============

function compressCharacters(str) {
    // Return empty string if input is empty
    if (!str) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // Check if the current character is equal to the next character
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // Append character and append count only if count is greater than 1
            result += str[i] + (count > 1 ? count : "");
            count = 1; // Reset count for the next sequence
        }
    }

    return result;
}


//Output:

console.log(compressCharacters("aaabbc")); // Output: "a3b2c"
console.log(compressCharacters("hello"));  // Output: "hel2o"
console.log(compressCharacters("abcd"));   // Output: "abcd"