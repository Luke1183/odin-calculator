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
  if (operator === " + ") {
    return addNum(a, b);
  } else if (operator === " - ") {
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
        num1 = num1 + button.textContent;
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
      calcDisplay.textContent = "Input a number";
    } else if (
      (button.textContent === "+" ||
        button.textContent === "-" ||
        button.textContent === "*" ||
        button.textContent === "/") &&
      !(num1 === undefined) &&
      operator === undefined &&
      num2 === undefined
    ) {
      if (button.textContent === "+" || button.textContent === "-") {
        operator = ` ${button.textContent} `;
      } else {
        operator = `${button.textContent}`;
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
      if (button.textContent === "+" || button.textContent === "-") {
        operator = ` ${button.textContent} `;
      } else {
        operator = `${button.textContent}`;
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
      if (button.textContent === "+" || button.textContent === "-") {
        num1 = operate(Number(num1), Number(num2), operator);
        operator = ` ${button.textContent} `;
        num2 = undefined;
      } else {
        num1 = operate(Number(num1), Number(num2), operator);
        operator = `${button.textContent}`;
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
      num1 = operate(Number(num1), Number(num2), operator);
      operator = undefined;
      num2 = undefined;
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
      calcDisplay.textContent = `${num1}${operator}`;
    } else if (
      !(num1 === undefined) &&
      !(operator === undefined) &&
      !(num2 === undefined)
    ) {
      calcDisplay.textContent = `${num1}${operator}${num2}`;
    }
  });
});

// function removeGrid() {
//   while (gridContainer.firstChild) {
//     gridContainer.removeChild(gridContainer.firstChild);
//   }
// }

// function createGrid(n) {
//   let cellDim = 960 / n;
//   for (let i = 1; i <= n * n; i++) {
//     let cellOpacity = 1;
//     let cell = document.createElement("div");
//     cell.style.minWidth = `${cellDim}px`;
//     cell.style.backgroundColor = "white";
//     cell.addEventListener("mouseenter", () => {
//       let randomNumber = 5 * Math.random();
//       if (cellOpacity > 0) {
//         cellOpacity -= 0.1;
//         cell.style.opacity = `${cellOpacity}`;
//       }
//       if (randomNumber < 1) {
//         cell.style.backgroundColor = "blue";
//       } else if (randomNumber >= 1 && randomNumber < 2) {
//         cell.style.backgroundColor = "green";
//       } else if (randomNumber >= 2 && randomNumber < 3) {
//         cell.style.backgroundColor = "red";
//       } else if (randomNumber >= 3 && randomNumber < 4) {
//         cell.style.backgroundColor = "orange";
//       } else {
//         cell.style.backgroundColor = "yellow";
//       }
//     });
//     gridContainer.appendChild(cell);
//   }
// }

// const gridRefreshButton = document.querySelector("#grid-refresh");
// gridRefreshButton.addEventListener("click", () => {
//   removeGrid();
//   createGrid(n);
//   gridContainer.style.backgroundColor = "black";
// });

// const gridSizeButton = document.querySelector("#grid-size");
// gridSizeButton.addEventListener("click", () => {
//   let userInput = Number(prompt("Enter a number between 16 and 100:"));
//   let errorMessage = "";

//   if (Number.isInteger(userInput)) {
//     if (userInput > 15 && userInput < 101) {
//       n = userInput;
//       createGrid(n);
//       gridContainer.style.backgroundColor = "black";
//     } else {
//       removeGrid();
//       errorMessage = "Number not within range";
//       gridContainer.style.backgroundColor = "white";
//     }
//   } else {
//     removeGrid();
//     errorMessage = "Must enter a number";
//     gridContainer.style.backgroundColor = "white";
//   }
//   if (errorMessage === "") {
//     removeGrid();
//     createGrid(n);
//   } else {
//     errorMessageText = document.createElement("div");
//     errorMessageText.textContent = errorMessage;
//     gridContainer.appendChild(errorMessageText);
//   }
// });

// let errorMessage = "";
// let n = 16;
// const gridContainer = document.querySelector("#grid-container");
// createGrid(n);
