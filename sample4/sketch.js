function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  let t = frameCount * 0.05;
  let pulse = sin(millis() * 0.003); 
  let colorCycle = (sin(t * 0.5) + 1) / 2; 

  noStroke();
  let circleColor = lerpColor(color(140, 75, 120), color(180, 100, 160), colorCycle);
  fill(circleColor);
  
  circle(100, 350, 100 + pulse * 15);
  circle(120, 140, 50 + pulse * 8);
  circle(170, 350, 100 + pulse * 15);

  fill(60, 90, 180);
  let nudgeY = cos(t) * 10; 
  
  ellipse(470, 260 + nudgeY, 40, 110);
  ellipse(520, 345 + nudgeY, 150, 50);
  ellipse(420, 375 + nudgeY, 150, 50);

  fill(0, 0, 0);
  let vibe = sin(t * 2) * 3;
  
  triangle(50, 300, 50, 200, 200 + vibe, 200);
  triangle(200 + vibe, 200, 180, 146, 250 + vibe, 115);
  triangle(250 + vibe, 115, 225, 100, 255 + vibe, 60);
  triangle(255 + vibe, 60, 240, 40, 265 + vibe, 10);

  fill(220, 60, 60);
  rect(500, 0, 100, 50);
  
  fill(256, 256, 256);
  rect(450, 50, 150, 40);
  rect(430, 90, 20, 100);

  fill(128, 128, 128);
  rect(350, 230, 80, 20 + pulse * 5);
  triangle(300, 100, 350, 150, 275 + vibe, 125);

  let arcColor = lerpColor(color(70, 140, 200), color(90, 110, 180), colorCycle);
  fill(arcColor);
  
  arc(210, 310, 120, 90, PI + 2, PI + 2.8);
  arc(220, 330, 120, 90, PI + 2.5, PI + 3.3);
  arc(223, 350, 120, 90, PI + 3.0, PI + 3.8);
  arc(190, 300, 120, 90, PI + 1.5, PI + 2.3);

  stroke(70, 140, 200);
  strokeWeight(10 + sin(t) * 3); 
  fill(125, 125, 125);
  rectMode(RADIUS);
  rect(300, 350, 10, 100);
  
  rectMode(CORNER); 
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('my_abstract_art', 3); 
  }
}