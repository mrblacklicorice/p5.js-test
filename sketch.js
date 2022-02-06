let xPos = 200;
let yPos = 200;

function setup() {
  createCanvas(400, 400);
    
  rectMode(CENTER);
  //centers at coord.
}

function draw() {
  background(220);
  //changes bg to monocrom color (can be hex)
  
  rect(xPos,yPos,200,200);
  //creates rectangle @ 50,50 coord.
  
  if (keyIsDown(UP_ARROW)) {
    yPos -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    yPos += 10;
  }
  
  if (keyIsDown(RIGHT_ARROW)) {
    xPos += 10;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    xPos -= 10;
  }
  
  
}

