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


















































