let xPos = 200;
let yPos = 200;

let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
    
  rectMode(CENTER);
  //centers at coord.
}

function draw() {
  background(220);
  //changes bg to monocrom color (can be hex)
  
  if (keyIsDown(16)) {
    rotate(angle);
  }
//rotates the box when shift is clicked
  
  //rotates box
  rect(xPos,yPos,200,200);
  //creates rectangle @ 50,50 coord.
  angle += 0.07;
  
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
