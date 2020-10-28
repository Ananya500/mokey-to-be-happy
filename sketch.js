var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaBunch,
    bunchImage;
var FoodGroup, obstacleGroup;
var score = 0;
var ground;
var survivalTime = 0;
var back_ground,back_groundImage;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bunchImage = loadImage("Banana.png");
  //back_groundImage = loadImage("")
  
 
}



function setup() {
createCanvas(500,500);
monkey = createSprite(50,400,30,30);
monkey.addAnimation("monkeyAni",monkey_running);
monkey.scale = 0.15;

ground = createSprite (250,450,500,10);

  
  
FoodGroup = createGroup();

obstacleGroup = createGroup();
  
bunchGroup = createGroup();
  }


function draw() {
background(136,206,325);
ground.velocityX = -2;
    if (ground.x < 220){
      ground.x = ground.width/2;

    }
  
if(keyDown("space")&& monkey.y < 420){
monkey.velocityY = -12;
}

monkey.velocityY = monkey.velocityY + 0.8;
  
food();
bunch();
obstacles();
 
  if (monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  score = score + 2;
  
}
  
  if (monkey.isTouching(bunchGroup)){
  bunchGroup.destroyEach();
  score = score + 20;  
  
}
  
 if (monkey.isTouching(obstacleGroup)){
  monkey.scale = 0.10;
}
  
  
survivalTime = Math.ceil(frameCount/frameRate())
fill("black")
textSize(20)
text("Survival Time :"+ survivalTime, 250,60)
  
fill("black")
textSize(20)
text("Score :"+ score, 100,60)

switch(score){
  case 10: monkey.scale = 0.18;
    break;
  case 20 : monkey.scale = 0.22;
    break;
  case 30 : monkey.scale = 0.25;
    break;
  case 40 : monkey.scale = 0.28;
    default : break;
}
monkey.collide(ground) ;
  

drawSprites();
  
}

function food(){
if (World.frameCount%150 === 0){
lb = Math.round(random(200,350));
banana = createSprite (500,lb,3,3);
banana.addImage(bananaImage);
banana.scale = 0.15;
banana.velocityX = -1;
FoodGroup.add(banana)}
}

function bunch(){
if (World.frameCount%150 === 0){
k = Math.round(random(200,300));
bananaBunch = createSprite (500,k,3,3);
bananaBunch.addImage(bunchImage);
bananaBunch.scale = 0.09;
bananaBunch.velocityX = -25;
bunchGroup.add(bananaBunch)
 
  if (monkey.isTouching(bunchGroup)){
  bunchGroup.destroyEach();
  score = score + 20;
monkey.scale = 1.5;
 
  
}
  }

}

function obstacles(){
  if (World.frameCount%300=== 0){
    obstacle = createSprite (500,429,30,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -2;
    obstacleGroup.add(obstacle);
  }
}






