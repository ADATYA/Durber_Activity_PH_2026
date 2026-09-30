/* 
=============
Solution Code
=============
*/

function swapKeysAndValues(obj) {
    // Empty object to hold the inverted key-value pairs
    const result = {};

    // Iterate through all enumerable properties of the input object
    for (const key in obj) {
        // Ensure the property belongs directly to the object (not inherited from prototype chain)
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            
            // Assign the original value as the new key, and the original key as the new value
            result[value] = key;
        }
    }

    return result;
}

// ==========================================
// Test cases execution and verification
// ==========================================

// Example 1: Standard key-value object
const originalObj1 = { a: "apple", b: "banana", c: "cherry" };
console.log("Example 1 Output:", swapKeysAndValues(originalObj1));

// Example 2: Numeric values converted to object keys
const originalObj2 = { name: "John", age: 25, role: "admin" };
console.log("Example 2 Output:", swapKeysAndValues(originalObj2));

// Example 3: Empty object
const originalObj3 = {};
console.log("Example 3 Output:", swapKeysAndValues(originalObj3));