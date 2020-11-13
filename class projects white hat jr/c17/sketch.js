var trex, treximage
var ground ,groundimage

function preload () {
 treximage = loadAnimation("trex1.png","trex4.png","trex3.png");
  groundimage=
  loadImage ("ground2.png")
}

function setup() {
  createCanvas(400, 400);
  trex = createSprite (200,335,20,50);
  trex.addAnimation ("run",treximage); 
  trex.scale = 0.5
  
  ground = createSprite (200,380,400,14);
  ground.addImage (groundimage);
  ground.velocityX = -10;
  
}

function draw() {
  background(220);
 if (keyDown ("space")) {
trex.velocityY = -12  
     } 
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide (ground)  ;
  
  if  (ground.x < 0)  {
  ground.x = ground.width/2  
      }

  drawSprites (); 
}
