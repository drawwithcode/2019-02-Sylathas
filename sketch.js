var snowflakes = [];
var colorone = 0;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 100);

  createCanvas(windowWidth,windowHeight);
  background(25);
}

function draw(){
  noStroke();
  background(mouseY/7);
  if(colorone == 100){
    colorone = 0;
  }
  colorone += 0.5;
  fill(colorone, 100, 100);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5, 10); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  push();

  for(var h = 0; h < windowHeight; h+= width/50){
    pop();
    translate(0,3);
    push();
    for(var v = 0; v < windowWidth; v+= width/50){
      fill(mouseY / 7);
      rect(v, h, width/60 + mouseX/200, width/60 + mouseX/200);
      translate (3,0);
    }
  }
  pop();
  text("background=", mouseX+20 - mouseX/9, mouseY - height/20 - mouseY/10);
  text("stroke width=", mouseX+20 - mouseX/9, mouseY  - height/40 - mouseY/10);
  text(floor(mouseY/7), mouseX+110 - mouseX/9, mouseY - height/20 - mouseY/10);
  text(floor(6 - (width/60 + mouseX/200)/2), mouseX+110 - mouseX/9, mouseY  - height/40 - mouseY/10);
  translate (width/2.8,-height/12);

  stroke("black");
  textSize(15);
  text('move mouse to change stroke width and background color', 0, height - height/20);
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(4, 15);

  this.radius = sqrt(random(pow(width, 2)));

  this.update = function(time) {
    let w = 0.5;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function ChangeColor(rettangolo, colore) {
  rettangolo.fill(colore,100,100);
}
