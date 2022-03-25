var circles = [];

let pixel = 70;

var row = 6;
var col = 7;
var borders = new Array(col);


var x_mar;
var y_mar;

var p1_scr = 0;
var p2_scr = 0; 

var curry;

var p1 = true;

var board = ((new Array(row)).fill(0)).map(ele => (new Array(col)).fill("-"));


function setup() {
  createCanvas(10*pixel, 10*pixel);
  
  x_mar = ((width-(col*pixel))/2);
  y_mar = ((height-(row*pixel))/2);
  borders.fill(row * pixel+y_mar-(pixel/2));
  textSize(20);
  textAlign(CENTER,CENTER);
}

function draw() {
  clear();
  background(220);
  
  fill("blue");
  text(p1_scr,x_mar+pixel,(y_mar/2));
  fill("red");
  text(p2_scr,x_mar+((col-1)*pixel),(y_mar/2));
  
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
  
  if(circles.length > 0 && circles[circles.length-1].y == borders[curry] && check_win("o")){  
    p1_scr++;
    console.log("player 1 wins");
    board = ((new Array(row)).fill(0)).map(ele => (new Array(col)).fill("-"));
    circles = [];
    borders.fill(row * pixel+y_mar-(pixel/2));
    curry = undefined;
    p1 = true;
  }
  
  if(circles.length > 0 && circles[circles.length-1].y == borders[curry] && check_win("x")){
    p2_scr++;
    console.log("player 2 wins");
    board = ((new Array(row)).fill(0)).map(ele => (new Array(col)).fill("-"));
    circles = [];
    borders.fill(row * pixel+y_mar-(pixel/2));
    curry = undefined;
    p1 = true;
  }
     
}

function mouseClicked() {
  if(x_mar < mouseX && mouseX < x_mar+(col*pixel) && (curry == undefined || borders[curry] == circles[circles.length-1].y) && borders[Math.floor(((mouseX-x_mar)/pixel))] > y_mar+pixel) {
    if(curry != undefined) borders[curry] -= pixel;
    circles.push({x:(Math.floor(((mouseX-x_mar)/pixel))*pixel)+(pixel/2)+x_mar,y:y_mar-pixel,c:(p1 ? "blue" : "red")});
    p1 = !p1;
    curry = Math.floor(((mouseX-x_mar)/pixel));
    board[(borders[curry]-y_mar-(pixel/2))/pixel][curry] = p1 ? "x" : "o";
    // console.table(board);
  }
}


function check_win(p) {
	var tr, tc, i;
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[r].length; c++) {
			if (board[r][c] == p) {
				for (let l = -1; l < 1; l++) {
					for (let k = -1; k < 1; k++) {
						tr = 0, tc = 0, i = 1;
						if (!(l == 0 && k == 0)) {
							while (isInBorder(r + tr, c + tc) && board[r + tr][c + tc] == p) {
								if (i == 4) return true;
								tr += l;
								tc += k;
								i++;
							}
						}
					}
				}
			}
		}
	}
	return false;
}

function isInBorder(r, c) {
	return (r > -1 && r < row && c > -1 && c < col);
}
