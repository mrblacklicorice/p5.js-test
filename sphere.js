function setup() {
  createCanvas(600, 600, WEBGL);
}

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
   if (keyIsDown(UP_ARROW)) {
    rotateX(frameCount/100);
  }
   if (keyIsDown(DOWN_ARROW)) {
    rotateX(-frameCount/100);
  }
   if (keyIsDown(RIGHT_ARROW)) {
    rotateY(frameCount/100);
  }
   if (keyIsDown(LEFT_ARROW)) {
    rotateY(-frameCount/100);
  }
 
  sphere(200,24,16);
  //normalMaterial();
  pop();
  
  //background(0,0,0,5);

}
