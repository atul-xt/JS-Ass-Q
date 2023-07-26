// Qs1. Write a JavaScript function that returns array elements larger than a number.


let arr = [2, 7, 12, 4, 5, 7, 9, 12, 34];
let number = 5;

function largerElement(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (number < arr[i]) {
            console.log(arr[i]);   
        }
    }
}

console.log(largerElement(arr, number));

