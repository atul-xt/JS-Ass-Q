// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let number = 12;
let count = 0;

for (let i = 1; number != 0; i++) {
    number = Math.floor(number / 10);
    count++;
}
console.log(count);