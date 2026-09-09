/* You went shopping to buy cakes and donuts with X tk (the currency of Bangladesh).

First, you bought one cake for A tk at a cake shop.

Then, with the money you had left, you bought as many donuts as possible for B tk each, at a donut shop.

How much do you have left after all your shopping?

Example 1
Input: totalMoney = 100, cakeCost = 20, donutCost = 10

Output: 0

Explanation: Started with 100 tk. Bought cake for 20 tk, 80 tk left. Bought 8 donuts (80 / 10) for 80 tk. 0 tk left.

Example 2
Input: totalMoney = 50, cakeCost = 30, donutCost = 7

Output: 6

Explanation: Started with 50 tk. Bought cake for 30 tk, 20 tk left. Bought 2 donuts (Math.floor(20 / 7)) for 14 tk. 6 tk left.

Example 3
Input: totalMoney = 10, cakeCost = 20, donutCost = 5

Output: -10

Explanation: Started with 10 tk. Bought cake for 20 tk, -10 tk left (went into debt). Can't buy any donuts. -10 tk left.

Constraints
`totalMoney`, `cakeCost`, and `donutCost` are positive integers.
`donutCost` will always be greater than 0. */

//==========
//Solution
//==========

function getRemainingMoney(totalMoney, cakeCost, donutCost) {
    // কেক কেনার পর অবশিষ্ট টাকা
    let moneyLeftAfterCake = totalMoney - cakeCost;
    
    // যদি কেক কেনার পর টাকা ০ বা তার কম হয় (ধার হয়ে যায়)
    if (moneyLeftAfterCake < 0) {
        return moneyLeftAfterCake;
    }
    
    // অবশিষ্ট টাকা দিয়ে যতগুলো সম্ভব ডোনাট কেনার পর অবশিষ্ট টাকা
    let finalRemainingMoney = moneyLeftAfterCake % donutCost;
    
    return finalRemainingMoney;
}

// Example 1:
console.log(getRemainingMoney(100, 20, 10)); // Output: 0

// Example 2:
console.log(getRemainingMoney(50, 30, 7));   // Output: 6

// Example 3:
console.log(getRemainingMoney(10, 20, 5));   // Output: -10
