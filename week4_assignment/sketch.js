var magnify = 300; // overall size of the rose
var rotation = 180;
var radius = 50;
var elements = 256; // number of elements

function setup() {
  createCanvas(800, 800);

  rectMode(CENTER);

  colorMode(HSB, 360, 100, 100, 100);
  // HSB makes it easier to create colourful gradients
}


function draw() {

  background(0, 0, 0, 15);
  // transparent black background
  // previous frames fade slowly instead of disappearing immediately
  // this creates motion trails


  radius = map(
    sin(frameCount * 0.01),
    -1, 1,
    2, 12
  );

  // sine makes the radius smoothly expand and contract


  rotation = map(
    cos(frameCount * 0.008),
    -1, 1,
    2, 10
  );

  // cosine creates a second repeating movement
  // at a slightly different speed


  var spacing = TWO_PI / elements;

  translate(width * 0.5, height * 0.5);
  // moves the origin to the centre


  rotate(frameCount * 0.002);
  // slowly rotates the whole rose


  // OUTER COLOURFUL ROSE//

  for (var i = 0; i < elements; i++) {

    var n = noise(
      i * 0.05,
      frameCount * 0.01
    );

    // noise creates smooth variation


    var sizeChange;

    if (i % 2 == 0) {

      sizeChange = magnify;

    } else {

      sizeChange = magnify * 0.6;

    }

    // modulo 2:
    // long → short → long → short


    var distance =
      sin(spacing * i * radius)
      * sizeChange
      * (0.7 + n * 0.5);


    
    // COLOUR USING MODULO //

    var colourChoice = i % 4;


    if (colourChoice == 0) {

      fill(330, 70, 100, 60);
      // pink

    }

    else if (colourChoice == 1) {

      fill(120, 60, 100, 60);
      // green

    }

    else if (colourChoice == 2) {

      fill(210, 70, 100, 60);
      // blue

    }

    else {

      fill(50, 80, 100, 60);
      // yellow

    }


    stroke(
      (i * 2 + frameCount * 0.5) % 360,
      80,
      100,
      70
    );


    push();


    rotate(
      spacing * i * rotation
    );


    translate(
      distance,
      0
    );


    var rectWidth =
      20 + n * 70;

    var rectHeight;

    if (i % 3 == 0) {

      rectHeight = 25;

    } else {

      rectHeight = 10;

    }

    // modulo 3:
    // tall → short → short
    // tall → short → short


    rotate(
      noise(i * 0.1, frameCount * 0.02) * PI
    );


    rect(
      0,
      0,
      rectWidth,
      rectHeight
    );


    pop();
  }
}