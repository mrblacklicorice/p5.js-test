function setup() {
  createCanvas(600, 600, WEBGL);
}

let sphereAngle = {
  xAngle: 0,
  yAngle: 0,
}
//keep state separate from drawing function

function draw() {
  noFill();
  strokeWeight(1);
  stroke(255,255,255,10);
  background(0);
 
  
  //center
  translate(0,0,0);
  sphere(50,24,16);
  
  //upper edge
  // translate(0,0,0);
  translate(0,-120,0);
  sphere(50,24,16);
  
  //lower edge
  // translate(0,0,0);
  translate(0,240,0);
  sphere(50,24,16);
  
  //right edge
  translate(120,0,0);
  sphere(50,24,16);
  
  //left edge
  translate(240,0,0);
  sphere(50,24,16);
  
  //bottom right corner
 // translate(120,120,0);
 // sphere(50,24,16);
  
 
 

}
