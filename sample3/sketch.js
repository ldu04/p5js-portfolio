var blinking = false;
var followMouse = true;
var noteY = 0;
var bgR = 250;
var bgG = 248;
var bgB = 242;

var prevMousePressed = false;
var prevBKeyPressed = false;
var prevGKeyPressed = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bgR, bgG, bgB);

  noteY = noteY - 0.6;
  if (noteY < -25) {
    noteY = 0;
  }

  if (mouseIsPressed && !prevMousePressed) {
    followMouse = !followMouse;
  }
  prevMousePressed = mouseIsPressed;

  if (keyIsPressed) {
    if (key == 'r' || key == 'R') {
      bgR = random(200, 255);
      bgG = random(200, 255);
      bgB = random(200, 255);
    }
    if ((key == 'b' || key == 'B') && !prevBKeyPressed) {
      blinking = !blinking;
      prevBKeyPressed = true;
    }
    if ((key == 'g' || key == 'G') && !prevGKeyPressed) {
      saveGif('myCharacter_10s', 10);
      prevGKeyPressed = true;
    }
  } else {
    prevBKeyPressed = false;
    prevGKeyPressed = false;
  }

  stroke(32, 32, 36);
  strokeWeight(2.4);
  line(148, 150 + noteY, 178, 146 + noteY);
  noStroke();
  fill(32, 32, 36);
  ellipse(136, 170 + noteY, 11, 8);
  ellipse(162, 166 + noteY, 11, 8);
  stroke(32, 32, 36);
  strokeWeight(2);
  line(141, 168 + noteY, 148, 150 + noteY);
  line(167, 164 + noteY, 178, 146 + noteY);
  noStroke();

  fill(52, 74, 128);
  ellipse(300, 298, 155, 108);
  fill(24, 42, 95);
  beginShape();
  vertex(184, 396);
  bezierVertex(238, 406, 362, 406, 416, 396);
  bezierVertex(432, 362, 436, 328, 414, 312);
  bezierVertex(382, 300, 340, 296, 300, 298);
  bezierVertex(260, 296, 218, 300, 186, 312);
  bezierVertex(164, 328, 168, 362, 184, 396);
  endShape(CLOSE);
  fill(0);
  circle(300, 186, 212);
  fill(244, 214, 188);
  ellipse(300, 228, 170, 198);
  fill(0);
  arc(300, 176, 152, 94, PI, TWO_PI);

  stroke(145, 145, 148);
  strokeWeight(13);
  noFill();
  arc(300, 186, 224, 224, PI + 0.06, TWO_PI - 0.06);
  noStroke();
  fill(145, 145, 148);
  ellipse(188, 222, 62, 88);
  ellipse(412, 222, 62, 88);

  var eyeOffsetX = 0;
  var eyeOffsetY = 0;
  
  if (followMouse) {
    eyeOffsetX = constrain((mouseX - 300) / 20, -5, 5);
    eyeOffsetY = constrain((mouseY - 218) / 20, -3, 3);
  }

  if (blinking) {
    stroke(80, 60, 50);
    strokeWeight(2.5);
    line(249, 218, 275, 218);
    line(325, 218, 351, 218);
    noStroke();
  } else {
    fill(255);
    ellipse(262, 218, 36, 14);
    ellipse(338, 218, 36, 14);
    fill(24, 24, 28);
    ellipse(262 + eyeOffsetX, 218 + eyeOffsetY, 24, 9);
    ellipse(338 + eyeOffsetX, 218 + eyeOffsetY, 24, 9);
    fill(255);
    ellipse(266 + eyeOffsetX, 216 + eyeOffsetY, 5, 4);
    ellipse(342 + eyeOffsetX, 216 + eyeOffsetY, 5, 4);
  }

  noFill();
  stroke(210, 172, 150);
  strokeWeight(1.8);
  line(300, 232, 300, 254);
  line(294, 254, 306, 254);
  stroke(195, 90, 88);
  strokeWeight(1.8);
  arc(300, 268, 44, 19, 0.2 * PI, 0.8 * PI);
  stroke(0);
  strokeWeight(1.6);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  beginShape();
  vertex(232, 209);
  bezierVertex(245, 203, 279, 203, 292, 209);
  bezierVertex(294, 217, 288, 233, 262, 237);
  bezierVertex(236, 233, 230, 217, 232, 209);
  endShape(CLOSE);
  beginShape();
  vertex(308, 209);
  bezierVertex(321, 203, 355, 203, 368, 209);
  bezierVertex(370, 217, 364, 233, 338, 237);
  bezierVertex(312, 233, 306, 217, 308, 209);
  endShape(CLOSE);
  line(292, 223, 308, 223);
  strokeWeight(7);
  bezier(231, 207, 245, 200, 279, 200, 293, 207);
  bezier(307, 207, 321, 200, 355, 200, 369, 207);
  stroke(44, 62, 115);
  strokeWeight(1.1);
  line(268, 324, 266, 361);
  line(332, 324, 334, 361);
}