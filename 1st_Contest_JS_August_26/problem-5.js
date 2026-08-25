/**
 * Shopping Spree
 * You went shopping to buy cakes and donuts with X tk (the currency of Bangladesh).

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

Constraints
`totalMoney`, `cakeCost`, and `donutCost` are positive integers.
`donutCost` will always be greater than 0.
*/

function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
    // 1. Calculate remaining money after buying 1 cake (ensure it never goes below 0)
    const moneyAfterCake = Math.max(0, totalMoney - cakeCost);

    // 2. Find out how many whole donuts can be bought
    const donutsBought = Math.floor(moneyAfterCake / donutCost);

    // 3. Subtract total donut cost from the money left after the cake
    const finalLeftover = moneyAfterCake - (donutsBought * donutCost);

    return finalLeftover;
}

// ==================== TEST CASES ==================== //

// Example 1:
console.log(calculateRemainingMoney(100, 20, 10)); 
// Output: 0

// Example 2:
console.log(calculateRemainingMoney(50, 30, 7)); 
// Output: 6