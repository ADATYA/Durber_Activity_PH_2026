/**
 * Count Number Properties
 * You will be given an array containing exactly five integer values. Your task is to count how many of these values are even, how many are odd, how many are positive, and how many are negative.

Return an object with four properties: even, odd, positive, and negative, each holding the respective count.

Remember that 0 is considered an even number, but it is neither positive nor negative.

Example 1
Input: numbers = [-5,0,3,-4,1]

Output: {"even":2,"negative":2,"odd":3,"positive":2}

Example 2
Input: numbers = [2,4,6,8,10]

Output: {"even":5,"negative":0,"odd":0,"positive":5}
*/

function countNumberProperties(numbers) {
    // 1. Initialize count variables to 0
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    // 2. Iterate through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        // 3. Check for Even vs. Odd
        // Math.abs() ensures negative odd numbers (e.g. -5) are evaluated correctly
        if (Math.abs(num) % 2 === 0) {
            even++;
        } else {
            odd++;
        }

        // 4. Check for Positive vs. Negative
        // Note: 0 is ignored here as it is neither positive nor negative
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        }
    }

    // 5. Return the counts structured inside an object
    return {
        even: even,
        odd: odd,
        positive: positive,
        negative: negative
    };
}

// ==================== TEST CASES ==================== //

// Case 1
const result1 = countNumberProperties([-5, 0, 3, -4, 1]);
console.log(result1);
// Output: {"even": 2, "negative": 2, "odd": 3, "positive": 2}

// Case 2
const result2 = countNumberProperties([2, 4, 6, 8, 10]);
console.log(result2);
// Output: {"even": 5, "negative": 0, "odd": 0, "positive": 5}


//PRACTICE: Different code solution.

function countNumberProperties(numbers){
    let even = 0;
    let odd = 0;
    let positive = 0;
    let negative = 0;

    for(let num of numbers){
        if(num % 2 === 0){
            even++;
        }else{
            odd++;
        }
        if(num < 0){
            positive++;
        }else{
            negative++;
        }
    }
    return {even ,odd, positive,negative};
}