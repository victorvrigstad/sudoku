"use strict";
/*const app = document.getElementById("app");

if (app) {
  app.innerHTML = "<h2 style='color: red;'>Hello Sudoku!</h2>";
  console.log("Sudoku app is running!");
} else {
  console.error("App div not found!");
}*/
Object.defineProperty(exports, "__esModule", { value: true });
const createBoard = () => {
    const board = [];
    for (let row = 0; row < 9; row++) {
        const boardRow = [];
        for (let col = 0; col < 9; col++) {
            const cell = {
                row: row,
                col: col,
                value: null,
                editable: true,
            };
            boardRow.push(cell);
        }
        board.push(boardRow);
    }
    return board;
};
const renderBoard = (board) => {
    const app = document.getElementById("app");
    if (!app)
        return;
    app.innerHTML = "";
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    for (let row = 0; row < 9; row++) {
        const tr = document.createElement("tr");
        for (let col = 0; col < 9; col++) {
            const td = document.createElement("td");
            td.style.width = "50px";
            td.style.height = "50px";
            td.style.textAlign = "center";
            td.style.verticalAlign = "middle";
            td.style.fontSize = "20px";
            td.style.backgroundColor = "#2c2c2c";
            td.style.color = "#ffffff";
            td.style.border = "1px solid #555";
            if ((col + 1) % 3 === 0)
                td.style.borderRight = "2px solid #fff";
            if ((row + 1) % 3 === 0)
                td.style.borderBottom = "2px solid #fff";
            if (col === 0)
                td.style.borderLeft = "2px solid #fff";
            if (row === 0)
                td.style.borderTop = "2px solid #fff";
            // Display value if exists
            //td.textContent = board[row]?.[col]?.value?.toString() ?? "";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    app.appendChild(table);
};
const board = createBoard();
renderBoard(board);
//# sourceMappingURL=index.js.map