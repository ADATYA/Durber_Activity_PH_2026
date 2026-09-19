/* Given a sentence, return an object containing the frequency count of each word. Ignore case differences (e.g., treat "The" and "the" as the same word).

Examples
countWordFrequencies("Hello world, hello!");
// Expected output:
// {"hello": 2, "world": 1}

countWordFrequencies("The quick brown fox jumps over the lazy dog.");
// Expected output:
// {"the": 2, "quick": 1, "brown": 1, "fox": 1, "jumps": 1, "over": 1, "lazy": 1, "dog": 1}
Example 1
Input: sentence = "Hello world, hello!"

Output: {"hello":2,"world":1}

Example 2
Input: sentence = "The quick brown fox jumps over the lazy dog."

Output: {"brown":1,"dog":1,"fox":1,"jumps":1,"lazy":1,"over":1,"quick":1,"the":2}

Constraints
The input `sentence` will be a string.
Words consist of alphanumeric characters. Punctuation and spaces should be ignored when determining words. */


//=============
//SOLUTION CODE
//=============

function countWordFrequencies(sentence) {
    // Return empty object if input is empty or invalid
    if (!sentence) return {};

    // Match all alphanumeric word sequences in lower case
    const words = sentence.toLowerCase().match(/[a-z0-9]+/g);
    
    // Return empty object if no words found
    if (!words) return {};

    const frequencyMap = {};

    // Count frequency of each word
    for (const word of words) {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    }

    return frequencyMap;
}

//OUTPUT:

console.log(countWordFrequencies("Hello world, hello!"));
// Output: { hello: 2, world: 1 }

console.log(countWordFrequencies("The quick brown fox jumps over the lazy dog."));
// Output: { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }