
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var jungle2Image;
var PLAY;
var gameState = PLAY;

function preload(){
  
  jungle2Image=loadImage("Jungle2.jpg")
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
   jungle2=createSprite(400,400)
  jungle2.addImage(jungle2Image)
  jungle2.velocityX=-3

  
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
  
  background("lightblue");
  
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  
  
  if (jungle2.x < 0){
      jungle2.x = jungle2.width/2;
    }
  
   //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.8;
  
      monkey.collide(ground);
  
   if (gameState===PLAY){
     ground.visible = false
   }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score + 2;
  }
 switch(score){
   case 10:monkey.scale=0.12;
          break;
  case 20:monkey.scale=0.14;       
          break;
  case 30:monkey.scale=0.16;        
          break;
  case 40:monkey.scale=0.18;
          break;
      default: break;    
 }

  if(obstaclesGroup.isTouching(monkey)){
    monkey.scale=0.08;
    // score=score-2;
  }
  
spawnFood();
  spawnObstacles();
  
 
  drawSprites();
  
   stroke("white");
  textSize(15);
  fill("white");
  text("Score: "+score,310,40)
  
}
 
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(600,150,10,15)  
    banana.y=random(150,200)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.lifetime = 310;
    monkey.depth = banana.depth + 1;
    FoodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount%80==0){
    obstacles=createSprite(600,330,20,15)
    obstacles.velocityX=-3
    obstacles.addImage(obstacleImage)
    obstacles.scale=0.1
  }
}








