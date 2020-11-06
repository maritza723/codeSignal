/**Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, 
 * the second - from the year 101 up to and including the year 200, etc.
 * 
 * Example
 * 
 * For year = 1905, the output should be
 * centuryFromYear(year) = 20;
 * For year = 1700, the output should be
 * centuryFromYear(year) = 17.
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] integer year
 * 
 * A positive integer, designating the year.
 * 
 * Guaranteed constraints:
 * 1 ≤ year ≤ 2005.
 * 
 * [output] integer
 * 
 * The number of the century the year is in.
 * 
 * [JavaScript] Syntax Tips
 * 
 * // Prints help message to the console
 * // Returns a string
 * function helloWorld(name) {
 *     console.log("This prints to the console when you Run Tests");
 *     return "Hello, " + name;
 * }
 */
 
function centuryFromYear(year) {  
    console.log(year/100);  
    if (year%100 === 0){
        return year/100;
    } else { return Math.trunc(year/100 + 1); }
}

// console.log(centuryFromYear(1988) + " == 20");
// console.log();
// console.log(centuryFromYear(2000) + " == 20");
// console.log();
// console.log(centuryFromYear(374) + " == 4");
