// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2


let num1 = 32;
let num2 = 47852;

if ((num1 % 10 == num2 % 10))
{
    console.log("Last Digit Same");
}
else
{
    console.log("Digits not same");
}