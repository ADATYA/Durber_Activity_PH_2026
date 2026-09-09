/* Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

Example 1
Input: sentence = "hello world"

Output: "helloWorld"

Example 2
Input: sentence = "java script is fun"

Output: "javaScriptIsFun"

Constraints
The input `sentence` will be a string.
Words will be separated by one or more spaces.
The input may contain leading or trailing spaces. */

//==========
//Solution
//==========

function toCamelCase(sentence) {
    // ei khane sobdo gulo bhag kore gap sobdo gulo elementate kore diyechi.
    const words = sentence.trim().split(/\s+/);
    if (words.length === 0 || words[0] === "") return "";

    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
}

// Output: javaScriptIsFun
console.log(toCamelCase("java script is fun"));