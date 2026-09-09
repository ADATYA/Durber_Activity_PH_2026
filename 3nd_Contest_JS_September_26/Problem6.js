/* ## Repeated Digit Sum
Given a non-negative integer, repeatedly add all its digits until the result has only one digit.

Examples
repeatedDigitSum(9875)
// Expected output: 2
// Explanation: 9 + 8 + 7 + 5 = 29. Then, 2 + 9 = 11. Finally, 1 + 1 = 2.

repeatedDigitSum(123)
// Expected output: 6
// Explanation: 1 + 2 + 3 = 6.
Example 1
Input: n = 9875

Output: 2

Example 2
Input: n = 123

Output: 6

Constraints
The input `n` will be a non-negative integer. */

//Solution:

function repeatedDigitSum(n) {
    while (n >= 10) {  //>= na hole wrong hoche hidden case e giye.
        n = String(n)
            .split('')
            .reduce((sum, digit) => sum + Number(digit), 0);  // += hobe nah
    }
    return n;
}

// Example 1
console.log(repeatedDigitSum(9875)); // Output: 2

// Example 2
console.log(repeatedDigitSum(123));  // Output: 6