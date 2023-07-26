// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

let str = "abcac";
let ans = "";

function getString(str) {
    for (let i = 0; i < str.length; i++) {
        let currStr = str[i];
        if (ans.indexOf(currStr) == -1) {
            ans += currStr;
        }
    }
    return ans
}
console.log(getString(str));
