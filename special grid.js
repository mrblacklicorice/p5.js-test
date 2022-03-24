var circles = [];

let pixel = 70;

var row = 6;
var col = 7;
var borders = new Array(col);


var x_mar;
var y_mar;

var curry;

var p1 = true;

function setup() {
  createCanvas(10*pixel, 10*pixel);
  
  x_mar = ((width-(col*pixel))/2);
  y_mar = ((height-(row*pixel))/2);
  borders.fill(row * pixel+y_mar-(pixel/2));
}

function draw() {
  clear();
  background(220);
  
  
  //created 4x4 grid
    fill("grey");
  for (let x = 0; x < (col * pixel); x+=pixel){
    for (let y = 0; y < (row * pixel); y+=pixel){
      rect(x+x_mar,y+y_mar,pixel,pixel);
    }
  }
 
  
  for (let i = 0; i < circles.length; i++) {
    fill(circles[i].c);
    circle(circles[i].x, circles[i].y, pixel-(pixel/10));
  }

  if(circles.length > 0 && circles[circles.length-1].y < borders[curry]){
    circles[circles.length-1].y += pixel / 10;    
  }
  
 
}

function mouseClicked() {
  if(x_mar < mouseX && mouseX < x_mar+(col*pixel) && (curry == undefined || borders[curry] == circles[circles.length-1].y) && borders[Math.floor(((mouseX-x_mar)/pixel))] > y_mar+pixel) {
    if(curry != undefined) borders[curry] -= pixel;
    circles.push({x:(Math.floor(((mouseX-x_mar)/pixel))*pixel)+(pixel/2)+x_mar,y:y_mar-pixel,c:(p1 ? "blue" : "red")});
    p1 = !p1;
    curry = Math.floor(((mouseX-x_mar)/pixel));
  }
}
