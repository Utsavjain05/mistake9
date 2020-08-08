var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,x;

var player10, player20, player30, player40, players;
var player1IMg,player2Img,player3Img,player4Img;
var dino,dinoImg;
var playerlive;
var life1,life2,life3;
var bullet1Group=createGroup();
var bullet2Group=createGroup();
var bullet3Group=createGroup();
var bullet4Group=createGroup();
var Counter;
var count=0;
var enemyImg;
function preload(){
  player1Img=loadImage("player2.png");
  player2Img=loadImage("player3.png");
  player3Img=loadImage("player4.png");
  player4Img=loadImage("pngwave.png");
  dinoImg=loadImage("dino.png");
enemyImg=loadImage("hiclipart.com.png");
  //trackImg=loadImage("images/track.jpg");


}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    
    game.play2();
  }
  if(gameState === 3){
    
    game.play3();
  }
  //if(gameState===2){
    //game.end();
  //}
}
