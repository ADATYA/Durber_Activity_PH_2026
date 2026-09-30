/* 
=============
Solution Code
=============
*/

function getDayOfWeek(year, month, day) {
    // Array representing days of the week matching JavaScript's 0-indexed getDay()
    const weekdays = [
        "Sunday",    // Index 0
        "Monday",    // Index 1
        "Tuesday",   // Index 2
        "Wednesday", // Index 3
        "Thursday",  // Index 4
        "Friday",    // Index 5
        "Saturday"   // Index 6
    ];
    
    // Create Date object (month is 0-indexed in JS, so subtract 1 from 1-indexed input)
    const date = new Date(year, month - 1, day);
    
    // Retrieve day name using the numeric index returned by date.getDay()
    return weekdays[date.getDay()];
}

// Test cases for verification

// Example 1: Independence Day of Bangladesh (26th March 1971)
console.log("Example 1 (26 March 1971):", getDayOfWeek(1971, 3, 26));
// Output: Friday

// Example 2: New Year's Day (1st January 2026)
console.log("Example 2 (1 January 2026):", getDayOfWeek(2026, 1, 1));
// Output: Thursday

// Example 3: Leap Year Date (29th February 2024)
console.log("Example 3 (29 February 2024):", getDayOfWeek(2024, 2, 29));
// Output: Thursday