let xPos = 200;
let yPos = 200;

let angle = 0.5;

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
 if (keyIsDown(LEFT_ARROW)) {
    rotateY(-angle);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rotateY(angle);
  }

  if (keyIsDown(UP_ARROW)) {
    rotateX(angle);
  }

  if (keyIsDown(DOWN_ARROW)) {
    rotateX(-angle);
  }

  box();
  
  
  
}
