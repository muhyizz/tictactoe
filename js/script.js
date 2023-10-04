
let board = [
    1,2,3,
    4,5,6,
    7,8,9
];

const nameForm = document.getElementById('name-form');

nameForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    let player_name = document.getElementById('name').value;
    startGame(player_name)
})

const startGame = (player_name) => {
    boards.forEach(element => {
        element.addEventListener('click',() => {
            let game_input = element.id;
            playerTurn(game_input, player_name);
        }
        )
    });
}

const boards = document.querySelectorAll('.block');



const resetbtn = document.getElementById('reset-btn');

resetbtn.addEventListener('click', ()=>{
    resetGame();
})

//Game Logic


let playerTurn = (input,name) => {
    let player_input = input;
    let player_mark = 'X'
    let player_name = name;
    console.log(player_name);
    if (checkAvailable(player_input)){
        updateTable(player_input,player_mark);
        setTimeout(()=>{
            let result = checkWin(board, player_mark);
        
        
            if (result === "win") {
                
                alert(`${player_name} wins!`);
                resetGame();
            } else if (result === "draw") {
                alert('It\'s a draw!');
                resetGame();
            } else {
                cpuTurn();
            }
        },50);
        
    } else {
        alert(`Position ${player_input} is taken`);
    }
}

const getRandomInt= (max) => {
    return Math.floor(Math.random() * max);
  }

const getComputerChoice =()=> {
    return getRandomInt(8) + 1;
}

let cpuTurn = () => {
    let choice = getComputerChoice();
    let computer_mark = 'O'
    while(!checkAvailable(choice)){
        choice = getComputerChoice()
    }

    updateTable(choice,computer_mark);
    let result = checkWin(board, computer_mark);

        if (result === "win") {
            console.log(result);
            alert('CPU wins!');
            resetGame();
        } else if (result === "draw") {
            alert('It\'s a draw!');
            resetGame();
        }
}

const checkAvailable = (input) =>{
    return board[input-1] !== 'X' && board[input-1] !== 'O';
}

const updateTable = (input, mark) => {
    let elementID = input.toString();
    const change = document.getElementById(elementID);
    change.innerHTML = mark;
    return board[input-1] = mark;
}

const checkWin = (board, mark) => {

    if (board.every(cell => cell === 'X'|| cell==='O')){
        return "draw";
    }

    if (board[0] == mark && board[1] == mark && board[2] == mark){
        return "win";
    } else if (board[3] == mark && board[4] == mark && board[5] == mark){
        return "win";
    } else if (board[6] == mark && board[7] == mark && board[8] == mark){
        return "win";
    } else if (board[0] == mark && board[3] == mark && board[6] == mark){
        return "win";
    } else if (board[1] == mark && board[4] == mark && board[7] == mark){
        return "win";
    } else if (board[2] == mark && board[5] == mark && board[8] == mark){
        return "win";
    } else if (board[0] == mark && board[4] == mark && board[8] == mark){
        return "win";
    } else if (board[2] == mark && board[4] == mark && board[6] == mark){
        return "win";
    }
}

const resetGame = ()=> {
    board = [
        1,2,3,
        4,5,6,
        7,8,9
    ];

    for (let id = 1; id < 10; id++){
        let itemID = id.toString();
        let changeID = document.getElementById(itemID);
        changeID.innerHTML = " ";
    }
}