generateTable();
const board = document.getElementById('game');
const restartButton = document.getElementById('restartButton');
let whoPlayed = 'red';

function generateTable() {
  const main = document.createElement('main');
  main.id = 'game';
  document.body.appendChild(main);

  // generate columns
  let counterColumns = 1;
  for (let i = 1; i <= 7; i++) {
    const divColumn = document.createElement('div');
    divColumn.className = 'columns';
    divColumn.id = `column${counterColumns++}`;
    main.appendChild(divColumn);
  }

  // generate cells
  const columns = document.querySelectorAll('.columns');
  let counterCells = 1;
  columns.forEach(column => {
    for (let i = 1; i <= 6; i++) {
      const divCells = document.createElement('div');
      divCells.className = 'cells';
      divCells.id = `cell${counterCells++}`;
      column.appendChild(divCells);
    }
  });
}

function addCircle(col, currentPlayer) {
  const circle = document.createElement('div');
  circle.classList.add('disc');
  circle.classList.add(currentPlayer);

  const newCol = col.children;

  for (let i = newCol.length - 1; i >= 0; i--) {
    if (newCol[i].innerHTML === '') {
      newCol[i].appendChild(circle);
      i = -1;
    }
  }
}

function whoseTurnIsIt(currentPlayer) {
  if (currentPlayer === 'red') {
    whoPlayed = 'black';
  } else if (currentPlayer === 'black') {
    whoPlayed = 'red';
  }
}

function validateVertical() {
  for (let j = 1; j <= 6; j++) {
    const cells = document.querySelector(`#column${j}`).children;

    let discArray = [];
    for (let i = 0; i < cells.length; i++) {
      let discs = cells[i].firstChild;
      if (discs !== null) {
        discArray.push(discs.getAttribute('class'));
      }
    }

    let blackCounter = 0;
    let redCounter = 0;

    for (let i = 0; i < discArray.length; i++) {
      if (discArray[i] === 'disc black') {
        blackCounter++;
        if (discArray[i + 1] === 'disc red') {
          redCounter = 0;
        }
      }
      if (discArray[i] === 'disc red') {
        redCounter++;
        if (discArray[i + 1] === 'disc black') {
          blackCounter = 0;
        }
      }
    }
    if (blackCounter === 4) {
      return true;
    } else if (redCounter === 4) {
      return true;
    }
  }
  return false;
}

function validateHorizontal() {
  for (let x = 1; x <= 6; x++) {
    let discArray = [];
    for (let i = x; i <= x + 36; i += 6) {
      const cells = document.querySelector(`#cell${i}`);
      let discs = cells.firstChild;
      if (discs !== null) {
        discArray.push(discs.getAttribute('class'));
      }
    }
    let blackCounter = 0;
    let redCounter = 0;
    for (let i = 0; i < discArray.length; i++) {
      if (discArray[i] === 'disc black') {
        blackCounter++;
        if (discArray[i + 1] === 'disc red') {
          redCounter = 0;
        }
      }
      if (discArray[i] === 'disc red') {
        redCounter++;
        if (discArray[i + 1] === 'disc black') {
          blackCounter = 0;
        }
      }
    }
    if (blackCounter === 4) {
      return true;
    } else if (redCounter === 4) {
      return true;
    }
  }
  return false;
}

function validateDiagonal(boardContainer) {
  // validation from left to right
  for (let j = 5; j >= 3; j--) {
    for (let i = 0; i <= 3; i++) {
      let row = j;
      const coloredCircleGroup = [];
      for (let column = i; column <= i + 3; column++) {
        const coloredCircle = boardContainer.children[column].children[row].firstChild;
        if (coloredCircle !== null) {
          coloredCircleGroup.push(coloredCircle.classList[1]);
        }
        row -= 1;
      }
      const filterRed = coloredCircleGroup.filter(element => element === 'red');
      const filterBlack = coloredCircleGroup.filter(element => element === 'black');
      if (filterRed.length === 4 || filterBlack.length === 4) {
        return true;
      }
    }
  }

  // Validation from right to left
  for (let j = 5; j >= 3; j--) {
    for (let i = 6; i >= 3; i--) {
      let row = j;
      const coloredCircleGroup = [];
      for (let column = i; column >= i - 3; column--) {
        const coloredCircle = boardContainer.children[column].children[row].firstChild;
        if (coloredCircle !== null) {
          coloredCircleGroup.push(coloredCircle.classList[1]);
        }
        row -= 1;
      }
      const filterRed = coloredCircleGroup.filter(element => element === 'red');
      const filterBlack = coloredCircleGroup.filter(element => element === 'black');
      if (filterRed.length === 4 || filterBlack.length === 4) {
        return true;
      }
    }
  }
  return false;
}

function deleteTable() {
  const deleteMainTable = document.getElementById('game');
  deleteMainTable.remove();
}

/* Necessita ser revista */
function restart() {
  whoPlayed = '';
  deleteTable();
  generateTable();
}

restartButton.onclick = function () {
  restart();
};

function victoryMessage(player) {
  setTimeout(() => {
    alert(`${player} venceu!`);
  }, 100);
}

board.addEventListener('click', function (event) {
  const col = event.target.parentElement;
  addCircle(col, whoPlayed);

  const verticalWin = validateVertical();
  const horizontalWin = validateHorizontal();
  const diagonalWin = validateDiagonal(board);

  const weHaveAWinner = verticalWin || horizontalWin || diagonalWin;

  if (weHaveAWinner) {
    victoryMessage(whoPlayed);
  } else {
    whoseTurnIsIt(whoPlayed);
  }
});
