var canvasWidth = 1525;
var canvasHeight = 690;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER)
}

function draw() {
  background(2, 286, 240);
  var x = 200
  var y = 100;
  var position =x*-1;
 

  var x1=position+frameCount*3.6;
  var x2=position+frameCount*2.9;
  var x3=position+frameCount*2.7;
  var x4=position+frameCount*3.9;
  var x5=position+frameCount*3.1;
  var x6=position+frameCount*4.1;
  var x7=position+frameCount*3.5;
  var x8=position+frameCount*2.5;


  //first rectangle
  fill(237, 34, 93);

  rect(x1, 0, x, y);

  //2nd rectangle
  fill(237, 34, 93);
  
  rect(x2, 101, x, y);

  //2th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x3, 203, x, y);

  //3th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x4, 305, x, y);

  //4th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x5, 408, x, y);

  //5th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x6, 510, x, y);

  //6th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x7, 611, x, y);

  //7th rectangle
  fill(237, 34, 93);
  noStroke();
  rect(x8, 712, x, y);
  
}
