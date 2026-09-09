/*  ## Is It a Palindrome?
 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. For this problem, you need to write a function that checks if a given string is a palindrome.

Your function should ignore case, spaces, and punctuation. Only alphanumeric characters (letters and numbers) should be considered when determining if the string is a palindrome.

Examples
isPalindrome("madam")
// => true

isPalindrome("A man, a plan, a canal: Panama")
// => true

isPalindrome("hello")
// => false
Example 1
Input: str = "madam"

Output: true

Example 2
Input: str = "A man, a plan, a canal: Panama"

Output: true

Constraints
The input `str` will be a string.
The length of `str` will be between 0 and 1000 characters. */


//Solution:

function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the original cleaned string matches the reversed string
    return cleanedStr === reversedStr;
}

// Example 1
console.log(isPalindrome("madam")); 
// Output: true

// Example 2
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
// Output: true

// Additional Test Case
console.log(isPalindrome("hello")); 
// Output: false