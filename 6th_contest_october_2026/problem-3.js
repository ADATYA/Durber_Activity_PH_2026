/* Validate an Email Address */
/* Write a function isValidEmail that checks whether a given string is a valid email address according to a simplified format specification.

A string is considered a valid email address if and only if:

It has the format <local>@<domain>.<tld>.
Local part (before @): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9), periods (.), underscores (_), or hyphens (-).
Domain part (between @ and .): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9) or hyphens (-).
Top-Level Domain (TLD) (after .): Contains at least two characters and consists only of alphabetical letters (a-z, A-Z).
The email must not contain any spaces or additional @ characters.
Examples
isValidEmail("user@example.com");
// => true

isValidEmail("invalid.email@");
// => false
Example 1
Input: email = "user@example.com"

Output: true

Explanation: Standard valid email matching local, domain, and 3-letter TLD.

Example 2
Input: email = "invalid.email@"

Output: false

Explanation: Missing domain and TLD parts.

Constraints
email is a string with length between 0 and 100
email contains only printable ASCII characters */


//SOLUTION:

function isValidEmail(email) {
    // Regex breakdown:
    // ^[a-zA-Z0-9._-]+ -> Local part: at least one character of letters, numbers, periods, underscores, or hyphens
    // @               -> Must contain a single '@' separator
    // [a-zA-Z0-9-]+   -> Domain part: at least one character of letters, numbers, or hyphens
    // \.              -> Must contain a '.' before the TLD
    // [a-zA-Z]{2,}$   -> TLD: at least two alphabetical letters, ending the string
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
}

//TEST: 
console.log(isValidEmail("user@example.com"));    // => true
console.log(isValidEmail("invalid.email@"));      // => false
console.log(isValidEmail("test.user_123@sub-domain.co")); // => true
console.log(isValidEmail("bad email@domain.com"));  // => false (contains space)
console.log(isValidEmail("user@domain.c"));       // => false (TLD is only 1 character)