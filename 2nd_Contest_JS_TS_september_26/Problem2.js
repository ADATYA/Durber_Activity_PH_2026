 /* Given an array of integers, return an object containing the count of even and odd numbers.

Example 1
Input: numbers = [1,2,3,4,5]

Output: {"even":2,"odd":3}

Example 2
Input: numbers = [10,20,30]

Output: {"even":3,"odd":0}

Constraints
The input array `numbers` will contain only integers.
The length of the `numbers` array will be between 0 and 1000. */


//==========
// SOLUTION
//==========


function countEvenOdd(numbers) {
    let evenCount = 0;
    let oddCount = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return {
        even: evenCount,
        odd: oddCount
    };
}

// Example Test Cases:
console.log(countEvenOdd([1, 2, 3, 4, 5])); // {"even": 2, "odd": 3}
console.log(countEvenOdd([10, 20, 30]));   // {"even": 3, "odd": 0}


/// One more method:

const countEvenOdd = (numbers) => 
    numbers.reduce((acc, num) => {
        num % 2 === 0 ? acc.even++ : acc.odd++;
        return acc;
    }, { even: 0, odd: 0 });