/* Validate Bangladeshi Mobile Number*/

/*Determine if a given string represents a valid Bangladeshi mobile number. A valid number must conform to one of the following formats:

Starts with 01, followed by 9 more digits. The digit immediately after 01 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 01712345678)
Starts with +8801, followed by 9 more digits. The digit immediately after +8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., +8801712345678)
Starts with 8801, followed by 9 more digits. The digit immediately after 8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 8801712345678)
All characters must be digits, except for the optional leading + sign.

Example 1
Input: phoneNumber = "01712345678"

Output: true

Example 2
Input: phoneNumber = "+8801987654321"

Output: true

Constraints
The input `phoneNumber` will be a string.*/

//SOLUTION:

function isValidBDPhoneNumber(phoneNumber) {
    // Regex breakdown:
    // ^(?:\+88|88)? -> Optionally starts with "+88" or "88"
    // 01            -> Must start with "01" after the optional country code
    // [3-45-9]      -> The next digit must be 3, 4, 5, 6, 7, 8, or 9
    // \d{8}$        -> Followed by exactly 8 more digits until the end of the string
    
    const phoneRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
    
    return phoneRegex.test(phoneNumber);
}

//TEST:
console.log(isValidBDPhoneNumber("01712345678"));    // => true (Grameenphone)
console.log(isValidBDPhoneNumber("+8801987654321")); // => true (Banglalink with +88)
console.log(isValidBDPhoneNumber("8801812345678"));  // => true (Robi with 88)
console.log(isValidBDPhoneNumber("01212345678"));    // => false (Invalid second digit after 01)
console.log(isValidBDPhoneNumber("0171234567"));     // => false (Too short)