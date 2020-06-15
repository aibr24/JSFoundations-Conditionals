let firstNumber = 3;
let secondNumber = 2;
let operator = "*";
let answer;

if (operator === "+") {
  answer = firstNumber + secondNumber;
} else if (operator === "-") {
  answer = firstNumber - secondNumber;
} else if (operator === "/") {
  answer = firstNumber / secondNumber;
} else if (operator === "*") {
  answer = firstNumber * secondNumber;
}
console.log(answer);
