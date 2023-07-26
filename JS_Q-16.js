// Qs16. Find the largest number in an array with only positive numbers.

let arr = [3,44,2,36,4,8,9];
let largest = 0;


for (let i = 0; i < arr.length; i++)
{
    if (largest < arr[i])
    {
        largest = arr[i];
    }
}

console.log(largest);
