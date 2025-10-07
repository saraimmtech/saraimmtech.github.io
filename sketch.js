// Time-based generative clock visualization
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  // plain pink background
  background(255, 182, 193);

  // get current time
  let hr = hour() % 12;
  let mn = minute();
  let sc = second();

  translate(width / 2, height / 2);


  // draw concentric arcs for seconds, minutes, hours
  noFill();
  strokeCap(SQUARE);

  // seconds - outer
  strokeWeight(6);
  stroke(255, 100, 100);
  arc(0, 0, 360, 360, -90, map(sc, 0, 60, -90, 270));

  // minutes - middle
  strokeWeight(10);
  stroke(100, 200, 255);
  arc(0, 0, 270, 270, -90, map(mn + sc / 60.0, 0, 60, -90, 270));

  // hours - inner
  strokeWeight(14);
  stroke(200, 255, 150);
  arc(0, 0, 100, 100, -90, map(hr + mn / 60.0, 0, 12, -90, 270));

  // center pulse representing milliseconds
  noStroke();
  let ms = millis() % 1000;
  let pulse = map(ms, 0, 1000, 0.8, 1.2);
  fill(10, 10, 30, 220);
  ellipse(0, 0, 40 * pulse, 40 * pulse);

  // digital time display
  fill(255);
  textSize(14);
  let ampm = hour() >= 12 ? 'PM' : 'AM';
  let displayH = nf(hour() % 12 === 0 ? 12 : hour() % 12, 2);
  let displayM = nf(mn, 2);
  let displayS = nf(sc, 2);
  push();
  translate(0, 70);
  fill(255, 245);
  textSize(18);
  text(displayH + ':' + displayM + ':' + displayS + ' ' + ampm, 0, 0);
  pop();

  // subtle date text
  push();
  translate(0, 95);
  textSize(12);
  fill(255, 200);
  let d = day();
  let mo = month();
  let yr = year();
  text(d + '/' + mo + '/' + yr, 0, 0);
  pop();
}

function mousePressed() {
  // Clicking will snapshot the canvas to a PNG
  saveCanvas('time-snapshot', 'png');
}