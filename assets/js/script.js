// let whoPlayed = 'red';

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
            if (columns[i] === 'disc black') {
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









































/* VITOR */


















































