/*  ## Temperature Converter

Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to the other unit. The result should be a number, rounded to two decimal places.

Examples
convertTemperature(0, 'C');
// Expected output: 32

convertTemperature(32, 'F');
// Expected output: 0
Example 1
Input: value = 0, unit = "C"

Output: 32

Example 2
Input: value = 32, unit = "F"

Output: 0

Constraints
`value` will be a number.
`unit` will be either 'C' or 'F'.*/


//Solution:

function convertTemperature(value, unit) {
    let converted;
    
    if (unit === 'C') {
        converted = (value * 9 / 5) + 32;
    } else if (unit === 'F') {
        converted = (value - 32) * 5 / 9;
    }
    
    return Number(converted.toFixed(2));
}

// Example 1
console.log(convertTemperature(0, 'C'));  // Output: 32

// Example 2
console.log(convertTemperature(32, 'F')); // Output: 0

// Additional Test Cases (with rounding)
console.log(convertTemperature(37, 'C')); // Output: 98.6
console.log(convertTemperature(100, 'F')); // Output: 37.78

