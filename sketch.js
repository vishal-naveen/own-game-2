var bgi,waterbgi,grassbgi;
var bg,waterbg,grassbg;

var alligatori, logi, beaveri;
var alligator, log, beaver;
var death, jump;

function preload(){
  bgi = loadImage("Bg.jpg");
  waterbgi = loadImage("waterbg.jpg");
  grassbgi = loadImage("grassbg.jpg");

  alligatori = loadImage("alligator.png")
  logi = loadImage("log.png")
  beaveri = loadImage("beaver.png")
}

function setup(){
  createCanvas(1600,800);
  bg = createSprite(800,400,50,50)
  bg.addImage(bgi);
  bg.scale = 2.5

  beaver = createSprite(250,600,50,50);
  beaver.addImage(beaveri);
  beaver.scale = 0.25
}

function draw(){
  background("black");
  bg.velocityX = 2;
  if(bg.x > 900){
    bg.x = 800
  }
  alli();
  logs();
  drawSprites();
}

function alli(){
  if(frameCount%250 === 0){
    var ran = Math.round(random(500,700))
    alligator = createSprite(1700,ran,50,50); 
    alligator.addImage(alligatori);
    alligator.scale = 0.3
    alligator.velocityX = -3
  }
  
}

function logs(){
  if(frameCount%60 === 0){
    
    log = createSprite(1700,600,50,50);
    log.addImage(logi);
    log.scale = 0.3  
    log.velocityX = -4
  }
  
}