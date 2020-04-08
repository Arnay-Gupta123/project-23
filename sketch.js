function setup() {
  createCanvas(400,400);
}

function draw() {
  background(0);  
  rectMode(CENTER);
  fill("white");
  stroke("yellow");
  rect(200,275,40,300);
  rect(240,275,40,150);
  rect(160,275,40,150);
  rect(120,300,40,200);
  rect(280,300,40,200);
  rect(330,250,60,300);
  rect(70,250,60,300);
  fill("yellow");
  triangle(200,75,180,125,220,125);
  triangle(330,50,300,100,360,100);
  triangle(70,50,100,100,40,100);
}