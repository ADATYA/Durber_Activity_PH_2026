/** PROBLEM -01 Contest Question
 * Get Month Name :
 * Given an integer monthNumber between 1 and 12, return the English name of the corresponding month, with the first letter capitalized.
 * Example 1
Input: monthNumber = 3
Output: "March"
 *  Example 2
Input: monthNumber = 10
Output: "October"
 *  Constraints
The input `monthNumber` will be an integer between 1 and 12, inclusive.
 */

function getMonthName(monthNumber){
    const months =[
        "January","February","March","April","May","June","July","August","September","October","November","December"
    ]; //0,1,2,3,4,5,6,7,8,9,10,11

    //monthNumber - 1 =  (7-1) = 6 ("July");
    return months[monthNumber -1]; //-1 are usnign for finding the real month number with finding wiht the acctueal array list 
}

//Show the output results:
console.log(getMonthName(3)); // March
console.log(getMonthName(7)); // July
console.log(getMonthName(10)); //October
