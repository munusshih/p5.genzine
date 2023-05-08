let hehe;

function preload() {
  // connect to the party server
  partyConnect("wss://demoserver.p5party.org", "happy");

  // begin loading hehe object
  // setup() won't be called until the hehe object is loaded
  hehe = partyLoadShared("hehe", { x: 0, y: 0 });
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  partyToggleInfo(false);
}

function mousePressed() {
  // write hehe data
  hehe.x = mouseX;
  hehe.y = mouseY;
}

function draw() {
  background("#ffcccc");
  fill("#000066");

  // read shared data
  ellipse(hehe.x, hehe.y, 100, 100);
}