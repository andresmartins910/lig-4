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


















































