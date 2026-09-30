/* 
=============
Solution Code
=============
*/

function findRainfallPeaks(rainfall) {
    // Array to store the 1-based days/positions of rainfall peaks
    const peaks = [];

    // Iterate through the array skipping the first and last elements
    for (let i = 1; i < rainfall.length - 1; i++) {
        // A peak occurs if current day's rainfall is strictly greater than both previous and next day
        if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
            // Push 1-based index day (i + 1) to the peaks array
            peaks.push(i + 1);
        }
    }

    return peaks;
}

// Test cases for verification

// Example 1: Peaks at Day 3 (value 15) and Day 6 (value 20)
const rainfall1 = [10, 12, 15, 7, 8, 20, 5];
console.log("Example 1 (Peak Days):", findRainfallPeaks(rainfall1));
// Output: [3, 6]

// Example 2: Continuous increase (No peaks in between)
const rainfall2 = [1, 2, 3, 4, 5];
console.log("Example 2 (No Peaks):", findRainfallPeaks(rainfall2));
// Output: []

// Example 3: Multiple peaks in a week
const rainfall3 = [5, 10, 3, 12, 4, 15, 2];
console.log("Example 3 (Multiple Peaks):", findRainfallPeaks(rainfall3));
// Output: [2, 4, 6]