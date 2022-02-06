let angle = 0.5;

function setup() {
  createCanvas(400, 400, WEBGL);
  //canvas size setup
}

function draw() {
  background(220);
  //sets background color
  
  rectMode(CENTER);
  //centers shape at the coordinate
  //rect(0,0,200,200);  <- rect = 2d or 3d plane
  
  
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
  
  
  //sphere(70);
  
  //am a bit special so idk how to center spheres
}
