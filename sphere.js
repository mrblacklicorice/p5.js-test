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
  // let dirX = (mouseX / width - 0.5) * 2;
  // let dirY = (mouseY / height - 0.5) * 2;
  // directionalLight(250, 250, 250, -dirX, -dirY, 0.25);
  //ambientMaterial(250);
  //noStroke();
  
  push();
  translate(10, height * 0.35, -200);
  
   if (keyIsDown(UP_ARROW)) {
    sphereAngle.xAngle += 0.01;
  }
   if (keyIsDown(DOWN_ARROW)) {
    sphereAngle.xAngle += -0.01;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    sphereAngle.yAngle += 0.01;
  }
   if (keyIsDown(LEFT_ARROW)) {
    sphereAngle.yAngle += -0.01;
  }
 
  rotateX(sphereAngle.xAngle)
  rotateY(sphereAngle.yAngle)
  
  sphere(100,24,16);
  //normalMaterial();
  pop();
  
  //background(0,0,0,5);

}
