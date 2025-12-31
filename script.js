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

function procNum(a) {
  aString = a.toString();
  aNum = Number(a);
  aNumDec = aString.split(".");
  if (aNumDec.length === 2 && aNumDec[1].length > 4) {
    if (aNumDec[1].slice(0, 4) === "0000") {
      result = aNum.toFixed(0);
    } else if (aNumDec[1].slice(1, 4) === "000") {
      result = aNum.toFixed(1);
    } else if (aNumDec[1].slice(2, 4) === "00") {
      result = aNum.toFixed(2);
    } else if (aNumDec[1].slice(3, 4) === "0") {
      result = aNum.toFixed(3);
    } else {
      result = aNum.toFixed(4);
    }
  } else {
    result = a;
  }
  return result;
}

let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let isResNum = false;
let result = undefined;

let num1IsInteger = true;

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
      button.textContent === "." &&
      num1 === undefined &&
      operator === undefined &&
      num2 === undefined
    ) {
      num1 = "0" + button.textContent;
    } else if (
      button.textContent === "." &&
      !(num1 === undefined) &&
      operator === undefined &&
      num2 === undefined
    ) {
      if (isResNum === true) {
        num1 = "0" + button.textContent;
        isResNum = false;
      } else if (num1IsInteger === true) {
        num1 = num1 + button.textContent;
      } else if (num1 === "-") {
        num1 = num1 + "0" + button.textContent;
      }
    } else if (
      button.textContent === "." &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      num2 === undefined
    ) {
      num2 = "0" + button.textContent;
    } else if (
      button.textContent === "." &&
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      if (Number.isInteger(Number(num2))) {
        num2 = num2 + button.textContent;
      } else if (num2 === "-") {
        num2 = num2 + "0" + button.textContent;
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
      isResNum = false;
      operator = undefined;
      num2 = undefined;
      result = undefined;
    }

    if (button.textContent === "Delete") {
      if (
        !(num1 === undefined) &&
        !(operator === undefined) &&
        !(num2 === undefined)
      ) {
        num2 = num2.slice(0, num2.length - 1);
        if (num2 === "") {
          num2 = undefined;
        }
      }
    }

    if (num1.toString().split(".").length === 2) {
      num1IsInteger = false;
    } else {
      num1Integer = true;
    }

    if (!(num1 === undefined)) {
      num1Disp = procNum(num1);
    }

    if (!(num2 === undefined)) {
      num2Disp = procNum(num2);
    }

    if (num1 === undefined && operator === undefined && num2 === undefined) {
      calcDisplay.textContent = "0";
    } else if (
      !(num1 === undefined) &&
      operator === undefined &&
      num2 === undefined
    ) {
      calcDisplay.textContent = `${num1Disp}`;
    } else if (
      !(num1 === undefined) &&
      !(operator === undefined) &&
      num2 === undefined
    ) {
      if (operator === "+" || operator === "-") {
        calcDisplay.textContent = `${num1Disp}   ${operator}`;
      } else {
        calcDisplay.textContent = `${num1Disp} ${operator}`;
      }
    } else if (
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      if (operator === "+" || operator === "-") {
        calcDisplay.textContent = `${num1Disp}   ${operator}   ${num2Disp}`;
      } else {
        calcDisplay.textContent = `${num1Disp} ${operator} ${num2Disp}`;
      }
    }
  });
});
