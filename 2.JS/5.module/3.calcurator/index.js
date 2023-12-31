// 이전 파일 내용 불러오기
// import {add,sub,mul,div} from './calculator.js';

// let sum = add(5,3);
// console.log(sum);

import Operator from "./calculator.js";
import { Sin1 } from "./sin.js";
import { Cos1 } from "./cos.js";
import { Tan1 } from "./tan.js";

let stdCalculator = new Operator();
let objectSin = new Sin1(1, 2);
let objectCos = new Cos1(2, 3);
let objectTan = new Tan1(3, 4);

//=====================================

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Select Calculator Mode");
console.log("1. Engnineering");
console.log("2. Standard");
console.log("3. Programmer");
rl.question("Enter the mode (1/2/3): ", (input) => {
  const num = parseFloat(input);

  if (!isNaN(num) && num === 2) {
    rl.question("Enter first number: ", (input) => {
      const firstNumber = parseFloat(input);

      if (!isNaN(firstNumber)) {
        rl.question("Enter operator (+, -, *, /): ", (input) => {
          const inputOperator = input;

          if (
            inputOperator === "+" ||
            inputOperator === "-" ||
            inputOperator === "*" ||
            inputOperator === "/"
          ) {
            rl.question("Enter second number: ", (input) => {
              const secondNumber = parseFloat(input);

              if (!isNaN(secondNumber)) {
                let result;
                switch (inputOperator) {
                  case "+":
                    result = stdCalculator.add(firstNumber, secondNumber);
                    break;
                  case "-":
                    result = stdCalculator.sub(firstNumber, secondNumber);
                    break;
                  case "*":
                    result = stdCalculator.mul(firstNumber, secondNumber);
                    break;
                  case "/":
                    result = stdCalculator.div(firstNumber, secondNumber);
                    break;
                }
                console.log("Result: ", result);
                rl.close();
              } else {
                console.log("숫자만 입력가능합니다.");
                rl.close();
              }
            });
          } else {
            console.log("연산자만 입력가능합니다.");
            rl.close();
          }
        });
      } else {
        console.log("숫자만 입력가능합니다.");
        rl.close();
      }
    });
  } else {
    console.log("2만 입력가능합니다.");
    rl.close();
  }
});
