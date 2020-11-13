var database;
var gameState = 0;
var playerCount,player,form,game,allPlayers;

function setup(){
    playerCount = 0;
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount == 4){
        game.update(1);
    }
    if(gameState == 1){
        game.play();
    }
}