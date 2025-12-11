function addNum(a, b) {
  return a + b;
}

function subNum(a, b) {
  return a - b;
}

function mulNum(a, b) {
  return a * b;
}

function divNum(a, b) {
  if (b == 0) {
    return "Can't divide by 0";
  } else {
    return a / b;
  }
}

function operate(a, b, operator) {
  if (operator === "+") {
    return addNum(a, b);
  } else if (operator === "-") {
    return subNum(a, b);
  } else if (operator === "*") {
    return mulNum(a, b);
  } else if (operator === "/") {
    return divNum(a, b);
  }
}

let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let isResNum = false;

const calcDisplay = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

calcDisplay.textContent = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.textContent === "0" ||
      button.textContent === "1" ||
      button.textContent === "2" ||
      button.textContent === "3" ||
      button.textContent === "4" ||
      button.textContent === "5" ||
      button.textContent === "6" ||
      button.textContent === "7" ||
      button.textContent === "8" ||
      button.textContent === "9"
    ) {
      if (num1 === undefined) {
        num1 = button.textContent;
      } else if (operator === undefined && !(num1 === undefined)) {
        if (isResNum === true) {
          num1 = button.textContent;
          isResNum = false;
        } else {
          num1 = num1 + button.textContent;
        }
      } else if (!(operator === undefined) && num2 === undefined) {
        num2 = button.textContent;
      } else {
        num2 = num2 + button.textContent;
      }
    }

    if (
      (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "*" ||
        button.textContent === "/") &&
      num1 === undefined &&
      operator === undefined &&
      num2 === undefined
    ) {
      if (button.textContent === "-") {
        num1 = button.textContent;
      }
    } else if (
      (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "*" ||
        button.textContent === "/") &&
      !(num1 === undefined) &&
      operator === undefined &&
      num2 === undefined
    ) {
      if (!(num1 === "-")) {
        operator = button.textContent;
      }
    } else if (
      (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "*" ||
        button.textContent === "/") &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      num2 === undefined
    ) {
      if (button.textContent === "-") {
        num2 = button.textContent;
      }
    } else if (
      (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "*" ||
        button.textContent === "/") &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      if (!(num2 === "-")) {
        num1 = operate(Number(num1), Number(num2), operator);
        operator = button.textContent;
        num2 = undefined;
      }
    }

    if (
      button.textContent === "=" &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      num2 === undefined
    ) {
      operator = undefined;
    } else if (
      button.textContent === "=" &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      if (num2 === "-") {
        operator = undefined;
        num2 = undefined;
      } else {
        num1 = operate(Number(num1), Number(num2), operator);
        operator = undefined;
        num2 = undefined;
        isResNum = true;
      }
    }

    if (button.textContent === "Clear") {
      num1 = undefined;
      operator = undefined;
      num2 = undefined;
    }

    if (num1 === undefined && operator === undefined && num2 === undefined) {
      calcDisplay.textContent = "0";
    } else if (
      !(num1 === undefined) &&
      operator === undefined &&
      num2 === undefined
    ) {
      calcDisplay.textContent = `${num1}`;
    } else if (
      !(num1 === undefined) &&
      !(operator === undefined) &&
      num2 === undefined
    ) {
      if (operator === "+" || operator === "-") {
        calcDisplay.textContent = `${num1}   ${operator}`;
      } else {
        calcDisplay.textContent = `${num1} ${operator}`;
      }
    } else if (
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      if (operator === "+" || operator === "-") {
        calcDisplay.textContent = `${num1}   ${operator}   ${num2}`;
      } else {
        calcDisplay.textContent = `${num1} ${operator} ${num2}`;
      }
    }
  });
});
