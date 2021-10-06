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


















































/* VITOR */


/* FUNCTION QUE RETORNA MENSAGEM DE VITORIA PARA O GANHADOR */ 

function victoryMessage (conditionV, conditionH, conditionD, player){
    if(conditionV || conditionH || conditionD){
        alert(`${player} venceu!`)
    }
    
}

/* Função para adicionar círculos na posição correta */

    //constante para pegar tabela inteira
    const tabela = document.getElementById('game')

    // evento de clique na tabela
    tabela.addEventListener('click', function (event){

      let col = event.target.parentElement
      console.log(col) 
        addCircle(col, player)
      
})
const player = 'red'

function addCircle(col, player) {
        
        const circle = document.createElement('div')
        circle.classList.add('circles')
        circle.classList.add(player)

        // transformo parametro col em array para tratar seus elementos
        const newCol = col.children

        //laço for para identificar o espaço a ser ocupado pela bolinha
        for (let i = newCol.length -1; i >= 0; i--){
            
            console.log(newCol[i])
            if(newCol[i].innerHTML === ''){

                newCol[i].appendChild(circle)
   
                i = -1 
            }       
        }
}










































