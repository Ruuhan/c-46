var bg
var player
var coins 
var bgimg
var barrier
var playerimg
var coinsimg
var barrierimg

function preload(){
  bgimg=loadImage("IMAGES/BACKGROUND IMAGE 1123.PNG")
  playerimg=loadAnimation("IMAGES/running-man.png","IMAGES/running-stick-figure.png","IMAGES/run.png")
  coinsimg=loadAnimation("IMAGES/irish.png","IMAGES/coin.png")
  barrierimg=loadImage('IMAGES/barrier.png')
}

function setup(){
  createCanvas(displayWidth,displayHeight)
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.velocityX=-15
  bg.addImage(bgimg)
  bg.scale=2.8
  player=createSprite(100,displayHeight-200,40,80)
  player.addAnimation("running",playerimg)
  player.scale=0.35
  
  
  
}


function draw(){
  if(bg.x<0){
    bg.x=displayWidth/2
  }
  createcoins()
  createbarrier()
  drawSprites()


}
function createcoins(){
  if(frameCount%80===0) {
    coins=createSprite(displayWidth,displayHeight-400)
  coins.addAnimation("coins",coinsimg)
  coins.scale=0.15
  coins.velocityX=-12
  }
  

}
function createbarrier(){
  if(frameCount%90===0){
    barrier=createSprite(displayWidth,displayHeight-200)
    barrier.addImage(barrierimg)
barrier.scale=0.2
barrier.velocityX=-6
  }
}