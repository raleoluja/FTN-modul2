/// <reference path="player.ts" />
/// <reference path="game.ts" />

let newGame: Game;

// TODO 4 implementirati reakciju na klik dugmeta StartGame
document.getElementById('startGame').addEventListener('click',  ()=> {
    let player: Player = new Player();
    player.$name = Utility.getInputValue('playername');

    let problemCount: number = Number(Utility.getInputValue('problemCount'));
    let factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
})


// TODO  implementirati reakciju na klik dugmeta Calculate

document.getElementById("calculate").addEventListener('click', ()=> {
    newGame.calculateScore();
})

