// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.

let str = "Atul Sadiwal"

if ( (str[0] === 'A' || str[0] === 'a') && (str.length > 5) )
{
    console.log("Golden String");
}
else
{
    console.log("Not a golden string");
}