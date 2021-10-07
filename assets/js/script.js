let whoPlayed = 'red';

/* ANDRÉ */
function generateTable() {
    const main = document.createElement('main')
    main.id = 'game'
    document.body.appendChild(main)

    // generate columns
    let counterColumns = 1
    for (let i = 1; i <= 7; i++) {
        const divColumn = document.createElement('div')
        divColumn.className = 'columns'
        divColumn.id = `column${counterColumns++}`
        main.appendChild(divColumn)
    }

    // generate cells
    const columns = document.querySelectorAll('.columns')
    let counterCells = 1
    columns.forEach(column => {
        for (let i = 1; i <= 6; i++) {
            const divCells = document.createElement('div')
            divCells.className = 'cells'
            divCells.id = `cell${counterCells++}`
            column.appendChild(divCells)
        }
    })
}

generateTable()



function whoseTurnIsIt(currentPlayer) {
    if (currentPlayer === 'red') {
        whoPlayed = 'black';
    } else if (currentPlayer === 'black') {
        whoPlayed = 'red';
    }
}
const addCircle = (columnArray, currentPlayer) => {
    const disc = document.createElement('div');
    disc.classList.add('disc');
    if (currentPlayer === 'red') {
        disc.classList.add('red');
    } else if (currentPlayer === 'black') {
        disc.classList.add('black');
    }
    for (let i = columnArray.length - 1; i >= 0; i--) {
        const currentCell = columnArray[i];
        if (currentCell.firstChild === null) {
            console.log(currentCell.innerHTML);
            currentCell.appendChild(disc);
            i = -1;
        }
    }
};

function validateVertical() {
    for (let j = 1; j <= 6; j++) {
        const cells = document.querySelector(`#column${j}`).children

        let discArray = []
        for (let i = 0; i < cells.length; i++) {
            let discs = cells[i].firstChild
            if (discs !== null) {
                discArray.push(discs.getAttribute('class'))
            }
        }

        let blackCounter = 0
        let redCounter = 0

        for (let i = 0; i < discArray.length; i++) {
            if (discArray[i] === 'disc black') {
                blackCounter++
                if (discArray[i + 1] === 'disc red') {
                    redCounter = 0
                }
            }
            if (discArray[i] === 'disc red') {
                redCounter++
                if (discArray[i + 1] === 'disc black') {
                    blackCounter = 0
                }
            }
        }
        if (blackCounter === 4) {
            return true
        } else if (redCounter === 4) {
            return true
        }
    }
    return false
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






































/* JUNIOR */
function whoseTurnIsIt (whoPlayed) {
    if (whoPlayed === 'red') {
       whoPlayed = 'black' ;
    } 
    else if (whoPlayed === 'black') {
        whoPlayed = 'red' ;
    }    
}
whoPlayed = 'red' ;

const restartButton = document.getElementById("restartButton");

function deleteTable() {
    const deleteMainTable = document.getElementById('game');
    deleteMainTable.remove();
}

function restart() {
    whoPlayed = '';
    deleteTable();
    generateTable();
}

restartButton.onclick = function () {
    restart();
};
























/* VITOR */



































/* RAFAEL */
const diagonalValidation = divContainer => {
  // validation from left to right
  for (let j = 5; j >= 3; j--) {
    for (let i = 0; i <= 3; i++) {
      let row = j;
      const coloredCircleGroup = [];
      for (let column = i; column <= i + 3; column++) {
        const coloredCircle = divContainer.children[column].children[row].firstChild;
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
        const coloredCircle = divContainer.children[column].children[row].firstChild;
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
};














