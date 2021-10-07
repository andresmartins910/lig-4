generateTable();
const board = document.getElementById('game');
const sectionControls = document.querySelector('.controls');
const restartButton = document.getElementById('restartButton');
let whoPlayed = 'red';
showInicialPlayer(whoPlayed, sectionControls);

function generateTable() {
  const main = document.createElement('main');
  main.id = 'game';
  document.body.prepend(main);

  // generate columns
  let counterColumns = 1;
  for (let i = 1; i <= 7; i++) {
    const divColumn = document.createElement('div');
    divColumn.className = 'columns';
    divColumn.classList.add('clickable');
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

function showInicialPlayer(initialPlayer, sectionControls) {
  const divShowPlayer = document.getElementById('show__player');
  const div = document.createElement('div');
  div.classList.add('disc');
  div.classList.add(initialPlayer);
  divShowPlayer.prepend(div);
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

function whoseTurnIsIt(previousPlayer) {
  const showPlayer = document.querySelector('#show__player > div');
  if (previousPlayer === 'red') {
    whoPlayed = 'black';
  } else if (previousPlayer === 'black') {
    whoPlayed = 'red';
  }
  showPlayer.classList.remove(previousPlayer);
  showPlayer.classList.add(whoPlayed);
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
      if (discs === null) {
        discArray.push(null);
      }
      if (discs !== null) {
        discArray.push(discs.getAttribute('class'));
      }
    }

    let blackCounter = 1;
    let redCounter = 1;

    for (let i = 0; i < discArray.length; i++) {
      if (discArray[i] === 'disc black') {
        blackCounter++;
        if (discArray[i - 1] === 'disc red' || discArray[i - 1] === null || discArray[i - 1] === undefined) {
          blackCounter = 1;
        }
      }
      if (discArray[i] === 'disc red') {
        redCounter++;
        if (discArray[i - 1] === 'disc black' || discArray[i - 1] === null || discArray[i - 1] === undefined) {
          redCounter = 1;
        }
      }
    }
    if (blackCounter >= 4) {
      return true;
    } else if (redCounter >= 4) {
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

function validateDraw() {
  const divCells = document.querySelectorAll('.cells');

  for (let i = 0; i < 37; i += 6) {
    if (divCells[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function deleteTable() {
  const dellRedCells = document.getElementsByClassName('disc red');
  while (dellRedCells.length > 0) {
    dellRedCells[0].remove();
  }
  const dellBlackCells = document.getElementsByClassName('disc black');
  while (dellBlackCells.length > 0) {
    dellBlackCells[0].remove();
  }
}

function restart() {
  deleteTable();
  whoPlayed = 'red';
  showInicialPlayer(whoPlayed, sectionControls);
}

restartButton.onclick = function () {
  restart();
};

function victoryMessage(player) {
  setTimeout(() => {
    alert(`${player} venceu!`);
  }, 100);
}

function drawMessage() {
  setTimeout(() => {
    alert('DRAW!!!');
  }, 100);
}

const columnIsFull = columnElementHTML => {
  const columnArray = columnElementHTML.children;
  let countNoEmptyCell = 0;
  for (let i = 0; i < columnArray.length; i++) {
    if (columnArray[i].innerHTML !== '') {
      countNoEmptyCell += 1;
    }
  }
  if (countNoEmptyCell === columnArray.length) {
    columnElementHTML.classList.remove('clickable');
  }
};

board.addEventListener('click', function (event) {
  const col = event.target.parentElement;

  columnIsFull(col);

  if (col.classList.contains('clickable')) {
    addCircle(col, whoPlayed);
    const verticalWin = validateVertical();
    const horizontalWin = validateHorizontal();
    const diagonalWin = validateDiagonal(board);
    const isDraw = validateDraw();

    const weHaveAWinner = verticalWin || horizontalWin || diagonalWin;

    if (weHaveAWinner) {
      victoryMessage(whoPlayed);
    } else if (isDraw) {
      drawMessage;
    } else {
      whoseTurnIsIt(whoPlayed);
    }
  }
});
