// Kaleidoscopic animated grid with 2D transformations, easing, and looping
let cols = 6;
let rows = 6;
let cellSize;
let t = 0;
let loopDuration = 240; // frames for a full loop

function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  rectMode(CENTER);
  angleMode(RADIANS);
}

function draw() {
  background(20);
  translate(width / 2, height / 2);
  // Kaleidoscopic symmetry: draw in 6 mirrored sectors
  let symmetry = 6;
  for (let s = 0; s < symmetry; s++) {
    push();
    rotate((TWO_PI / symmetry) * s);
    if (s % 2 === 1) scale(1, -1); // mirror every other sector
    drawGrid();
    pop();
  }
  t = (t + 1) % loopDuration;
}

function drawGrid() {
  for (let i = -cols / 2 + 0.5; i < cols / 2; i++) {
    for (let j = -rows / 2 + 0.5; j < rows / 2; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      push();
      translate(x, y);
      // Easing for smooth looping
      let loopT = (t / loopDuration) * TWO_PI;
      let phase = (i + j) * 0.5;
      let ease = easeInOutSine(sin(loopT + phase));
      // Animate rotation and scale
      rotate(loopT + phase + ease * PI);
      let s = map(ease, -1, 1, 0.5, 1.2);
      scale(s, s);
      // Offset for extra movement
      let offset = map(ease, -1, 1, -cellSize * 0.2, cellSize * 0.2);
      translate(offset, 0);
      // Draw element (could be image/video for more effect)
      fill(180 + 60 * sin(loopT + phase), 120, 220, 180);
      stroke(255, 80);
      strokeWeight(2);
      ellipse(0, 0, cellSize * 0.6, cellSize * 0.6);
      pop();
    }
  }
}

// Easing function for smooth animation
function easeInOutSine(x) {
  return -0.5 * (cos(PI * x) - 1);
}