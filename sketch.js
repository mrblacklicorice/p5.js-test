let angle = 0.5;

y_angle = 0;
x_angle = 0;


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
  
  rotateY(y_angle);
  rotateX(x_angle);


  box();
}
  
  
function keyPressed() {
    
    x_angle = 0;
    y_angle = 0;

    if(keyCode == LEFT_ARROW) {
      y_angle = 0.7;
      rotateY(y_angle);
    } 
    if(keyCode == RIGHT_ARROW) {
      y_angle = -0.7;
      rotateY(y_angle);
    }
    if(keyCode == UP_ARROW) {
      x_angle = 0.7;
      rotateX(x_angle);
    }
    if(keyCode == DOWN_ARROW) {
      x_angle = -0.7;
      rotateX(x_angle);
    }
  }
 
