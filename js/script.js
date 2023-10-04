
const board = [
    1,2,3,
    4,5,6,
    7,8,9
];

const boards = document.querySelectorAll('.block');

boards.forEach(element => {
    element.addEventListener('click',() => {
        console.log('tick');
    }
    )
});


const player_submit = document.getElementById('submit-btn');

player_submit.addEventListener('click',(event) =>{
    event.preventDefault();
    let player_input = document.getElementById('player-input').value;
    let player_mark = 'X'
    
    if (checkAvailable(player_input,player_mark)){
        updateTable(player_input,player_mark);
        if (checkWin(board, player_mark)){
            alert('Player Win');
        } else{
            cpuTurn();
        }
    } else {
        alert(`position ${player_input} is taken`);
    }
}
)

const getRandomInt= (max) => {
    return Math.floor(Math.random() * max);
  }

const getComputerChoice =()=> {
    return getRandomInt(9);
}

let cpuTurn = () => {
    let choice = getComputerChoice();
    let computer_mark = 'O'
    while(!checkAvailable(choice)){
        choice = getComputerChoice()
    }
    updateTable(choice,computer_mark);
    if (checkWin(board,'O')){
        console.log('CPU win');
    }   
}

const checkAvailable = (input,mark) =>{
    return board[input-1] !== 'X' && board[input-1] !== 'O';
}

const updateTable = (input, mark) => {
    return board[input-1] = mark;
}

const checkWin = (board, mark) => {
    if (board[0] == mark && board[1] == mark && board[2] == mark){
        return true;
    } else if (board[3] == mark && board[4] == mark && board[5] == mark){
        return true;
    } else if (board[6] == mark && board[7] == mark && board[8] == mark){
        return true;
    } else if (board[0] == mark && board[3] == mark && board[6] == mark){
        return true;
    } else if (board[1] == mark && board[4] == mark && board[7] == mark){
        return true;
    } else if (board[2] == mark && board[5] == mark && board[8] == mark){
        return true;
    } else if (board[0] == mark && board[4] == mark && board[8] == mark){
        return true;
    } else if (board[2] == mark && board[4] == mark && board[6] == mark){
        return true;
    } else{
        return false;
    }
}