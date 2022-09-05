// Khi click vào ô nào thì điền text tương ứng với turn hiện tại vào ô đó
// (chỉ điền khi mà chưa có text)

// Sau khi điền thì check win

// Nếu có ng chiến thắng thì thông báo và dừng trò chơi
// Nếu hết lượt (9) mà k có ng chiến thắng thì cũng dừng trò chơi

// Khi mà trò chơi kết thúc thì hiện nút restart để chơi lại

let row = document.getElementById("row");
let column = document.getElementById("column");
let container = document.querySelector(".container");
let form = document.querySelector("form");
const createTable = () => {
  let countRow = parseInt(row.value);
  let countColumn = parseInt(column.value);

  let tagTable = document.createElement("table");
  tagTable.classList.add("broad");
  for (let i = 0; i < countRow; i++) {
    let tagRow = document.createElement("tr");
    tagRow.classList.add("row");
    tagTable.appendChild(tagRow);

    for (let j = 0; j < countColumn; j++) {
      let tagColumn = document.createElement("td");
      tagColumn.classList.add("cell");
      tagRow.appendChild(tagColumn);
    }
  }

  container.appendChild(tagTable);
};
form.onsubmit = function (e) {
  e.preventDefault();
  createTable();
  play();
};

const reSet = () => {
  container.innerHTML = "";
  row.value = "";
  column.value = "";
};
const play = () => {
  let next = document.getElementById("next").value.toUpperCase();
  let cells = document.querySelectorAll(".cell");
  let winner = null;
  let table = document.querySelector(".broad");
  let countRow = parseInt(row.value);
  let countColumn = parseInt(column.value);
  const onCellClick = (e) => {
    let cell = e.target;
    const rowIndex = cell.parentElement.rowIndex;
    const cellIndex = cell.cellIndex;
    //check ngang
    const checkHorizontal = (rowIndex, cellIndex) => {
      let count = 1;
      const first = table.rows[rowIndex].cells[cellIndex];
      for (let i = cellIndex - 1; i >= 0; i--) {
        const cell = table.rows[rowIndex].cells[i];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }

      for (let i = cellIndex + 1; i < countColumn; i++) {
        const cell = table.rows[rowIndex].cells[i];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }
      return count >= 5;
    };
    // check dọc
    const checkVertical = (rowIndex, cellIndex) => {
      let count = 1;
      const first = table.rows[rowIndex].cells[cellIndex];
      for (let i = rowIndex - 1; i >= 0; i--) {
        const cell = table.rows[i].cells[cellIndex];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }

      for (let i = rowIndex + 1; i < countRow; i++) {
        const cell = table.rows[i].cells[cellIndex];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }
      return count >= 5;
    };

    //check chéo lên
    const checkCross = (rowIndex, cellIndex) => {
      let count = 1;
      const first = table.rows[rowIndex].cells[cellIndex];
      for (
        let i = rowIndex - 1, j = cellIndex - 1;
        i >= 0 && j >= 0;
        i--, j--
      ) {
        const cell = table.rows[i].cells[j];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }

      for (
        let i = rowIndex + 1, j = cellIndex + 1;
        i < countRow && j < countColumn;
        i++, j++
      ) {
        const cell = table.rows[i].cells[j];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }
      return count >= 5;
    };
    //chéo còn lại
    const checkCross2 = (rowIndex, cellIndex) => {
      let count = 1;
      const first = table.rows[rowIndex].cells[cellIndex];
      for (
        let i = rowIndex - 1, j = cellIndex + 1;
        i >= 0 && j < countColumn;
        i--, j++
      ) {
        const cell = table.rows[i].cells[j];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }
      for (
        let i = rowIndex + 1, j = cellIndex - 1;
        j >= 0 && i < countRow;
        i++, j--
      ) {
        const cell = table.rows[i].cells[j];
        if (cell.textContent === first.textContent) {
          count++;
        } else break;
      }
      return count >= 5;
    };
    if (winner || cell.textContent !== "") {
      return;
    } else cell.textContent = next;
    if (
      checkHorizontal(rowIndex, cellIndex) ||
      checkVertical(rowIndex, cellIndex) ||
      checkCross(rowIndex, cellIndex) ||
      checkCross2(rowIndex, cellIndex)
    ) {
      winner = next;
      alert("Winner: " + winner);
      restart();
    }
    next = next === "X" ? "O" : "X";
  };
  cells.forEach((cell) => cell.addEventListener("click", onCellClick));
  const restart = () => {
    winner = null;
    for (const cell of cells) {
      cell.textContent = "";
      next = winner === "X" ? "O" : "X";
    }
  };
};
