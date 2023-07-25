// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = 287152;
let sum = 0;
let temp = 0;

for (let i = 1; number > 0; i++) {
    temp = number % 10;
    sum += temp;
    number = Math.floor(number / 10);
}

console.log(sum);