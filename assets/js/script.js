/* ANDRÉ */


















































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
    const dellRedCells = document.getElementsByClassName("disc red");  
    while (dellRedCells.length > 0) {
      dellRedCells[0].remove();
    }
    const dellBlackCells = document.getElementsByClassName("disc black");  
    while (dellBlackCells.length > 0) {
      dellBlackCells[0].remove();
    }
  }
  
  function restart() {
    deleteTable();
  }

restartButton.onclick = function () {
    restart();
};




















/* VITOR */


















































