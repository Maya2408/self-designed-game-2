
var airoplane, plane, dragon1, dragon1Img, dragon2, dragon2Img;
var lightning, lightningImg;
var sky;
var enemyGroup;

function preload(){
    plane = loadImage("airoplane.png");
    dragon1Img = loadImage("flying dragon.png");
    dragon2Img = loadImage("flying dragon 2.png");
    lightningImg = loadImage("lightning.png");
    sky = loadImage("skyBackground.jpg");
}

function setup(){
  createCanvas(1200, 750);

  airoplane = createSprite(900, 500);
  airoplane.addImage(plane);
  airoplane.scale=0.5;
  airoplane.debug = true;

  enemyGroup = new Group();

}


function draw(){
    background(sky);

    if(keyDown(UP_ARROW)){
      airoplane.y -= 4;
    }

    if(keyDown(DOWN_ARROW)){
      airoplane.y += 4;
    }

    if(keyDown(RIGHT_ARROW)){
      airoplane.x += 4;
    }

    if(keyDown(LEFT_ARROW)){
      airoplane.x -= 4;
    }

     

    enemy();
    drawSprites();
}

function enemy(){
  if(frameCount % 200 === 0){
    dragon = createSprite(0, random(20, 700));
    dragon.velocityX = 3;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: dragon.addImage(dragon1Img);
              break;
      case 2: dragon.addImage(dragon2Img);
              break;
      case 3: dragon.addImage(lightningImg);
              break;
      default: break;
    }
    dragon.lifetime = 400;
    dragon.scale=0.5;
    dragon.debug = true;

    enemyGroup.add(dragon);
  }
}

//function point()