const boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gaemGrid;
//this will be used to check how many cells of the grid are filled and hence keep track of the game status

const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//there are only 8 ways through which a player can win the game

//now this function will initialize the game
function initGame() {
    currentPlayer = 'X';
    gaemGrid = ["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove('active');
    gameInfo.innerText = `Current Player: ${currentPlayer}`; 
}

initGame();

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index); 
    });
});


