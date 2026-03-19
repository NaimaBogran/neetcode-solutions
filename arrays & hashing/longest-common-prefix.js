// Longest Common Prefix
// Easy
// Topics
// Company Tags
// You are given an array of strings strs. Return the longest common prefix of all the strings.

// If there is no longest common prefix, return an empty string "".

// Example 1:

// Input: strs = ["bat","bag","bank","band"]

// Output: "ba"
// Example 2:

// Input: strs = ["dance","dag","danger","damage"]

// Output: "da"
// Example 3:

// Input: strs = ["neet","feet"]

// Output: ""
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] is made up of lowercase English letters if it is non-empty.

class Solution {
    longestCommonPrefix(strs) {

        let result = "";

        // Loop through each character of first string
        for (let i = 0; i < strs[0].length; i++) {

            let char = strs[0][i];

            // Compare with all other strings
            for (let j = 1; j < strs.length; j++) {

                if (i >= strs[j].length || strs[j][i] !== char) {
                    return result;
                }
            }

            result += char;
        }

        return result;
    }
}