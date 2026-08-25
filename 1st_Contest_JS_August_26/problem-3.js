/**
 * Nine or Nein?
 * You are given two positive integers, A and B.

Calculate the sum (A + B), difference (A - B), product (A * B), and quotient (A / B).

If at least one of these four values is exactly equal to 9, return the string "Nine". Otherwise, return "Nein".

Example 1
Input: a = 5, b = 4

Output: "Nine"

Explanation: A + B = 9

Example 2
Input: a = 10, b = 1

Output: "Nine"

Explanation: A - B = 9

Constraints
A and B will be positive integers.
A and B will be between 1 and 1000.
*/

function checkMathOperationsForNine(a, b) {
    // 1. Declare and calculate all four operations
    const sum = a + b;
    const diff = a - b;
    const product = a * b;
    const quotient = a / b;

    // 2. Check if any operation equals 9
    if (sum === 9 || diff === 9 || product === 9 || quotient === 9) {
        return "Nine";
    }

    // 3. Otherwise return "Nein"
    return "Nein";
}

// ==================== TEST CASES ==================== //

// Example 1 (Sum equals 9)
console.log(nineOrNein(5, 4));
// Output: "Nine"

// Example 2 (Difference equals 9)
console.log(nineOrNein(10, 1));
// Output: "Nine"

// Additional Test (No operation equals 9)
console.log(nineOrNein(4, 2));
// Output: "Nein"