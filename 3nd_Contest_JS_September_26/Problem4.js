/*  ## Classify Password Strength

Given a password string, classify its strength as "Weak", "Medium", or "Strong" based on the following rules:

Strong: The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, one digit, and one special character (from !@#$%^&*).
Medium: The password has a length of 6 or more characters and satisfies at least two of the four character-type conditions (uppercase, lowercase, digit, special character).
Weak: Any password that does not meet the criteria for "Strong" or "Medium".
Examples
classifyPassword("Password1!")
// Expected: "Strong"

classifyPassword("pass123")
// Expected: "Medium"
Example 1
Input: password = "Password1!"

Output: "Strong"

Example 2
Input: password = "pass123"

Output: "Medium" */

//Solution:


function classifyPassword(password) {
    const length = password.length;
    
    // Check individual character-type conditions
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*]/.test(password);
    
    // Count how many character-type conditions are met
    const typesCount = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;
    
    // Strong criteria check
    if (length >= 8 && typesCount === 4) {
        return "Strong";
    }
    
    // Medium criteria check
    if (length >= 6 && typesCount >= 2) {
        return "Medium";
    }
    
    // Default to Weak
    return "Weak";
}

// Example 1
console.log(classifyPassword("Password1!")); // Output: "Strong"

// Example 2
console.log(classifyPassword("pass123"));    // Output: "Medium"

// Additional Test Cases
console.log(classifyPassword("12345"));      // Output: "Weak" (length < 6)
console.log(classifyPassword("passwords"));  // Output: "Weak" (length >= 6 but only 1 type)