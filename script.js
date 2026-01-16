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

function operate(a, operator, b) {
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

function inputZero() {
  if (num1 === undefined || num1 === "0") {
    num1 = "0";
  } else if (
    operator === undefined &&
    !(num1 === undefined) &&
    isResNum === true
  ) {
    num1 = "0";
    isResNum = false;
  } else if (!(num1 === "0") && operator === undefined) {
    num1 = num1 + "0";
  } else if (!(operator === undefined) && num2 === undefined) {
    num2 = "0";
  } else if (!(num2 === "0")) {
    num2 = num2 + "0";
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputNonZeroDigit(digit) {
  if (num1 === undefined || num1 === "0") {
    num1 = digit;
  } else if (operator === undefined && !(num1 === undefined)) {
    if (isResNum === true) {
      num1 = digit;
      isResNum = false;
    } else {
      num1 = num1 + digit;
    }
  } else if (
    !(operator === undefined) &&
    (num2 === undefined || num2 === "0")
  ) {
    num2 = digit;
  } else {
    num2 = num2 + digit;
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputDecimal() {
  if (num1 === undefined && operator === undefined && num2 === undefined) {
    num1 = "0.";
  } else if (
    !(num1 === undefined) &&
    operator === undefined &&
    num2 === undefined
  ) {
    if (isResNum === true) {
      num1 = "0.";
      isResNum = false;
    } else if (num1IsInteger === true) {
      num1 = num1 + ".";
    } else if (num1 === "-") {
      num1 = num1 + "0.";
    }
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    num2 = "0.";
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === undefined)
  ) {
    if (!num2.includes(".") && !num2 === "-") {
      num2 = num2 + ".";
    } else if (num2 === "-") {
      num2 = num2 + "0.";
    } else if (num2 === "0") {
      num2 = "0.";
    }
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputNonMinusOperator(nonMinusOperator) {
  if (!(num1 === undefined) && operator === undefined && num2 === undefined) {
    if (!(num1 === "-")) {
      operator = nonMinusOperator;
    }
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    operator = nonMinusOperator;
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === undefined)
  ) {
    if (!(num2 === "-")) {
      num1 = operate(Number(num1), operator, Number(num2));
      operator = nonMinusOperator;
      num2 = undefined;
    }
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputMinus() {
  if (
    (num1 === undefined || num1 == 0) &&
    operator === undefined &&
    num2 === undefined
  ) {
    num1 = "-";
  } else if (!(num1 === "-") && !(num1 == 0) && operator === undefined) {
    operator = "-";
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    num2 = "-";
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === "-")
  ) {
    num1 = operate(Number(num1), operator, Number(num2));
    operator = "-";
    num2 = undefined;
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputEquals() {
  if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    operator = undefined;
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === undefined)
  ) {
    if (num2 === "-") {
      operator = undefined;
      num2 = undefined;
    } else {
      num1 = operate(Number(num1), operator, Number(num2));
      operator = undefined;
      num2 = undefined;
      isResNum = true;
    }
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function inputClear() {
  num1 = undefined;
  isResNum = false;
  operator = undefined;
  num2 = undefined;
  result = undefined;

  num1IsInteger = undefined;
  num2IsInteger = undefined;

  updateDisplay(num1, operator, num2);
}

function inputDelete() {
  if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === undefined)
  ) {
    num2 = num2.slice(0, num2.length - 1);
    if (num2 === "") {
      num2 = undefined;
    }
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    operator = undefined;
  } else if (
    !(num1 === undefined) &&
    operator === undefined &&
    num2 === undefined
  ) {
    if (isResNum === true) {
      num1 = undefined;
      isResNum = false;
    } else {
      num1 = num1.slice(0, num1.length - 1);
      if (num1 === "") {
        num1 = undefined;
      }
    }
  }

  num1IsInteger = checkForInteger(num1);
  num2IsInteger = checkForInteger(num2);

  updateDisplay(num1, operator, num2);
}

function checkForInteger(number) {
  if (number === undefined) {
    return undefined;
  } else if (num1.toString().split(".").length === 2) {
    return false;
  } else {
    return true;
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

function updateDisplay(num1, operator, num2) {
  if (!(num1 === undefined)) {
    num1Disp = procNum(num1);
  }

  if (!(num2 === undefined)) {
    num2Disp = procNum(num2);
  }

  if (num1 === undefined && operator === undefined && num2 === undefined) {
    return (calcDisplay.textContent = "0");
  } else if (
    !(num1 === undefined) &&
    operator === undefined &&
    num2 === undefined
  ) {
    return (calcDisplay.textContent = `${num1Disp}`);
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    num2 === undefined
  ) {
    if (operator === "+" || operator === "-") {
      return (calcDisplay.textContent = `${num1Disp}   ${operator}`);
    } else {
      return (calcDisplay.textContent = `${num1Disp} ${operator}`);
    }
  } else if (
    !(num1 === undefined) &&
    !(operator === undefined) &&
    !(num2 === undefined)
  ) {
    if (operator === "+" || operator === "-") {
      return (calcDisplay.textContent = `${num1Disp}   ${operator}   ${num2Disp}`);
    } else {
      return (calcDisplay.textContent = `${num1Disp} ${operator} ${num2Disp}`);
    }
  }
}

let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let isResNum = false;
let result = undefined;

let num1IsInteger = undefined;
let num2IsInteger = undefined;

const calcDisplay = document.querySelector("#display");
const zeroButton = document.querySelector("#dig0");
const oneButton = document.querySelector("#dig1");
const twoButton = document.querySelector("#dig2");
const threeButton = document.querySelector("#dig3");
const fourButton = document.querySelector("#dig4");
const fiveButton = document.querySelector("#dig5");
const sixButton = document.querySelector("#dig6");
const sevenButton = document.querySelector("#dig7");
const eightButton = document.querySelector("#dig8");
const nineButton = document.querySelector("#dig9");
const decimalButton = document.querySelector("#dec");
const plusButton = document.querySelector("#opPlus");
const minusButton = document.querySelector("#opNeg");
const divButton = document.querySelector("#opDiv");
const multButton = document.querySelector("#opMult");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

calcDisplay.textContent = "0";

zeroButton.addEventListener("click", inputZero);

oneButton.addEventListener("click", () => {
  inputNonZeroDigit("1");
});

twoButton.addEventListener("click", () => {
  inputNonZeroDigit("2");
});

threeButton.addEventListener("click", () => {
  inputNonZeroDigit("3");
});

fourButton.addEventListener("click", () => {
  inputNonZeroDigit("4");
});

fiveButton.addEventListener("click", () => {
  inputNonZeroDigit("5");
});

sixButton.addEventListener("click", () => {
  inputNonZeroDigit("6");
});

sevenButton.addEventListener("click", () => {
  inputNonZeroDigit("7");
});

eightButton.addEventListener("click", () => {
  inputNonZeroDigit("8");
});

nineButton.addEventListener("click", () => {
  inputNonZeroDigit("9");
});

// digitButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     inputNonZeroDigit(button.textContent);
//   });
// });

decimalButton.addEventListener("click", inputDecimal);

plusButton.addEventListener("click", () => {
  inputNonMinusOperator("+");
});

minusButton.addEventListener("click", inputMinus);

divButton.addEventListener("click", () => {
  inputNonMinusOperator("/");
});

multButton.addEventListener("click", () => {
  inputNonMinusOperator("*");
});

equalsButton.addEventListener("click", inputEquals);

clearButton.addEventListener("click", inputClear);

deleteButton.addEventListener("click", inputDelete);

window.addEventListener("keydown", function (event) {
  if (event.key == "0") {
    inputZero();
    zeroButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "1") {
    inputNonZeroDigit("1");
    oneButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "2") {
    inputNonZeroDigit("2");
    twoButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "3") {
    inputNonZeroDigit("3");
    threeButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "4") {
    inputNonZeroDigit("4");
    fourButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "5") {
    inputNonZeroDigit("5");
    fiveButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "6") {
    inputNonZeroDigit("6");
    sixButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "7") {
    inputNonZeroDigit("7");
    sevenButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "8") {
    inputNonZeroDigit("8");
    eightButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "9") {
    inputNonZeroDigit("9");
    nineButton.style.backgroundColor = "lightgray";
  }
  if (event.key == ".") {
    inputDecimal();
    decimalButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "+") {
    inputNonMinusOperator("+");
    plusButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "-") {
    inputMinus();
    minusButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "/") {
    inputNonMinusOperator("/");
    divButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "*") {
    inputNonMinusOperator("*");
    multButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "=" || event.key == "Enter") {
    inputEquals();
    equalsButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "c") {
    inputClear();
    clearButton.style.backgroundColor = "lightgray";
  }
  if (event.key == "Backspace") {
    inputDelete();
    deleteButton.style.backgroundColor = "lightgray";
  }
});

window.addEventListener("keyup", function (event) {
  zeroButton.style.backgroundColor = "darkturquoise";
  oneButton.style.backgroundColor = "darkturquoise";
  twoButton.style.backgroundColor = "darkturquoise";
  threeButton.style.backgroundColor = "darkturquoise";
  fourButton.style.backgroundColor = "darkturquoise";
  fiveButton.style.backgroundColor = "darkturquoise";
  sixButton.style.backgroundColor = "darkturquoise";
  sevenButton.style.backgroundColor = "darkturquoise";
  eightButton.style.backgroundColor = "darkturquoise";
  nineButton.style.backgroundColor = "darkturquoise";
  decimalButton.style.backgroundColor = "darkturquoise";
  plusButton.style.backgroundColor = "blue";
  minusButton.style.backgroundColor = "blue";
  divButton.style.backgroundColor = "blue";
  multButton.style.backgroundColor = "blue";
  equalsButton.style.backgroundColor = "green";
  clearButton.style.backgroundColor = "red";
  deleteButton.style.backgroundColor = "orange";
});
