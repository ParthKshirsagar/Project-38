var playerCar, tire1;
var gameState;
var randomX, x;
var lines1, lines2;
var dist;
var score;
var tireGroup;
var GameOver;
var retry;

function setup() {
  createCanvas(700,657);
  retry = document.getElementById("btn");
  console.log(retry);

  dist = 0;
  score = 0;
  gameState = 0;

  playerCar = createSprite(width/2, 550, 50, 50);
  playerCar.shapeColor = "blue";
  tireGroup = new Group();
}

function draw() {
  if(gameState == 0){
  background(200);
  }

  if(gameState === 0){
  camera.position.y = playerCar.y - width/4;

  if(keyDown("space")){
    playerCar.velocityY = 0;
  }

  if(keyDown("up")){
    dist = dist + 10;
    playerCar.y = playerCar.y - 20;
  }
  else if(keyDown("left") && playerCar.x>=166.665){
    playerCar.x = playerCar.x - 233.33;
  }
  else if(keyDown("right") && playerCar.x<=583.325){
    playerCar.x = playerCar.x + 233.33;
  }

  if(dist%100 == 0 && dist!==0){
    score = score + 1;
  }

  if(frameCount%1 == 0){
  if(frameCount/1===1 || frameCount%30000===0){
  for(var y = -50000; y <= 400; y = y+200){
  randomX = Math.round(random(1,3));
  if(randomX == 1){
    x = 116.665;
  }
  else if(randomX === 2){
    x = 349.995;
  }
  else if(randomX === 3){
    x = 583.325;
  }
   tire1 = createSprite(x, y, 50, 50);
   tire1.lifetime = 25000;
   tire1.shapeColor = "black";
   tireGroup.add(tire1);
  }
  }

  for(var i = -50000; i<height+400; i = i+70){
  lines1 = line(233.33, i, 233.33, i+30);
  lines2 = line(466.66, i, 466.66, i+30);
  }

    if(playerCar.isTouching(tireGroup)){
      gameState = 1;
      tireGroup.destroyEach();
    }
}

if(gameState === 1){
  playerCar.destroy();
  background("red");
  textSize(100);
  fill(rgb(0,0,0));
  GameOver = text("Game Over!", 100, playerCar.y-125);
  console.log(retry);
  retry.style.display = "block";
}
  

  textSize(20);
  fill(0);
  text("Score: " + score, 30, playerCar.y-430);
  drawSprites();
}
}
