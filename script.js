// Create a 16x16 grid here

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
