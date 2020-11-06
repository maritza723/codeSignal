/**Given the string, check if it is a palindrome.
 * Example
 * For inputString = "aabaa", the output should be
 * checkPalindrome(inputString) = true;
 * For inputString = "abac", the output should be
 * checkPalindrome(inputString) = false;
 * For inputString = "a", the output should be
 * checkPalindrome(inputString) = true.
 * Input/Output
 * 
 * [execution time limit] 4 seconds (js)
 * 
 * [input] string inputString
 * 
 * A non-empty string consisting of lowercase characters.
 * 
 * Guaranteed constraints:
 * 1 ≤ inputString.length ≤ 105.
 * 
 * [output] boolean
 * 
 * true if inputString is a palindrome, false otherwise. */
function checkPalindrome(inputString) {
    let len = inputString.length - 1;
    let j = len;
    console.log(inputString[j]);
    for (let i = 0; i < len/2; i++, j--){
        console.log(inputString[i]);
        // 
        if(inputString[i] != inputString[j]){
            return false;
        } 
    }
    return true;
}

console.log(checkPalindrome("aabaa") + " == true");
console.log();
console.log(checkPalindrome("abac") + " == false");