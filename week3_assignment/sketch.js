//s = 900, i = j = 0;    
// s is the canvas size, set to 900
// i and j are both initialised as 0
// these two variables will keep changing every frame and control
// the position of the quadrilateral's points

function setup() {

    createCanvas(s, s); 
    // creates a square canvas of 900 × 900 pixels

    stroke(255, 9);     
    // sets the outline colour to white
    // 255 = white and 9 is a very low alpha value
    // therefore each quadrilateral has a very faint outline
    // as many shapes overlap, the lines gradually become more visible

    fill(9, 3);         
    // sets the fill colour to almost black
    // with a very low alpha of 3
    // this makes each individual shape almost transparent
    // but repeated overlapping creates darker areas and visual texture
}

function draw() {

    quad(
        i++, j++,       
        // first point of the quadrilateral: (i, j)
        // i++ and j++ mean:
        // use the CURRENT values of i and j first,
        // then increase both by 1 afterwards
        //
        // therefore this point gradually moves diagonally
        // down and to the right as the animation runs

        j, i,           
        // second point: (j, i)
        // notice that i and j have already increased because of i++ and j++
        // in the previous coordinates
        //
        // swapping i and j creates a relationship between the x and y positions
        // rather than allowing them to move independently
        // this contributes to the symmetrical / crossing appearance of the form

        s - i, i - 50,  
        // third point: (900 - i, i - 50)
        //
        // as i increases:
        // s - i decreases
        // while i - 50 increases
        //
        // so the x-coordinate moves from right to left
        // while the y-coordinate moves downward
        //
        // this creates an opposing motion compared with the first point
        // and stretches / twists the quadrilateral

        s - j, j        
        // fourth point: (900 - j, j)
        //
        // as j increases:
        // s - j decreases while j increases
        //
        // so this point also travels diagonally from the
        // upper-right region towards the lower-left
    );

    i = (i << j % 4) % 1200;
    // this is the most important and unusual part of the code
    //
    // first:
    // j % 4
    //
    // modulo 4 means j repeatedly cycles through:
    //
    // 0, 1, 2, 3, 0, 1, 2, 3...
    //
    // therefore the amount that i is shifted changes repeatedly
    // between 0, 1, 2 and 3 bits

    // i << j % 4
    //
    // << is called the LEFT SHIFT operator
    //
    // shifting left by 1 is roughly equivalent to multiplying by 2
    // shifting left by 2 is roughly equivalent to multiplying by 4
    // shifting left by 3 is roughly equivalent to multiplying by 8
    //
    // so depending on j % 4:
    //
    // j % 4 = 0  →  i << 0  → i × 1
    // j % 4 = 1  →  i << 1  → i × 2
    // j % 4 = 2  →  i << 2  → i × 4
    // j % 4 = 3  →  i << 3  → i × 8
    //
    // this causes i to sometimes grow very rapidly rather than
    // increasing smoothly

    // finally:
    // % 1200
    //
    // limits the resulting value by wrapping it back around
    // whenever it reaches multiples of 1200
    //
    // so i does not simply continue growing forever
    //
    // conceptually the values behave like:
    //
    //       increasing value
    // 0 ---------------------- 1199
    // |                         |
    // +---------- wraps --------+
    //
    // this repeated growth and resetting produces sudden changes
    // in the quadrilateral's coordinates
    //
    // these jumps are a major reason the image develops
    // unpredictable crossings, curves and layered structures

    j = j % s;
    // since s = 900, this is:
    //
    // j = j % 900
    //
    // modulo keeps j within the range 0–899
    //
    // because j++ happens once every frame, j normally behaves like:
    //
    // 0, 1, 2, 3 ... 897, 898, 899, 0, 1, 2...
    //
    // therefore j repeatedly travels across the dimensions of the canvas
    // before wrapping back to 0
}//

let s = 900;   // canvas size - same 900x900 size as the original
let i = 0;     // variable controlling several coordinates of the quad
let j = 0;     // variable that increases every frame


function setup() {

  createCanvas(s, s);
  // creates a 900 x 900 square canvas

  background(15);
  // dark background drawn once at the beginning
  // because it is in setup(), previous shapes remain visible
  // and build up on top of each other

  frameRate(10);
  // slows down the animation
  // the original runs at approximately 60fps by default
  // this makes it easier to observe how the pattern develops

  stroke(255, 40);
  // faint white outline
  // low opacity allows overlapping strokes to build up
}


function draw() {

  // -----------------------------------------
  // COLOUR
  // -----------------------------------------

  let colourChoice = j % 4;

  // modulo 4 produces only four possible remainders:
  // 0, 1, 2, 3
  //
  // as j increases:
  //
  // j:       0  1  2  3  4  5  6  7...
  // j % 4:   0  1  2  3  0  1  2  3...
  //
  // these four values are used to cycle through
  // four different colours

  if (colourChoice == 0) {
    fill(255, 80, 160, 35);      // pink
  }

  if (colourChoice == 1) {
    fill(80, 255, 150, 35);      // green
  }

  if (colourChoice == 2) {
    fill(80, 150, 255, 35);      // blue
  }

  if (colourChoice == 3) {
    fill(255, 220, 70, 35);      // yellow
  }

  // colours repeat:
  //
  // PINK → GREEN → BLUE → YELLOW → PINK...


  // -----------------------------------------
  // FOUR POINTS OF THE QUAD
  // -----------------------------------------

  let x1 = i++;
  let y1 = j++;

  // first point = (i, j)
  //
  // ++ means use the current value first
  // and THEN increase it by 1
  //
  // e.g. if i = 10:
  // i++ uses 10, then i becomes 11


  let x2 = j;
  let y2 = i;

  // second point = (j, i)
  //
  // i and j have already increased from i++ and j++
  // the positions of i and j are also swapped
  // creating a relationship between x and y


  let x3 = s - i;
  let y3 = i - 150;

  // third point = (900-i, i-150)
  //
  // as i increases:
  // 900-i decreases
  // while i-150 increases
  //
  // therefore the x and y coordinates move
  // in opposite directions
  //
  // -150 offsets the point and stretches the quad


  let x4 = s - j;
  let y4 = j;

  // fourth point = (900-j, j)
  //
  // as j increases:
  // 900-j decreases
  // j increases
  //
  // therefore this point moves diagonally
  // across the canvas


  quad(
    x1, y1,
    x2, y2,
    x3, y3,
    x4, y4
  );

  // connects the four changing points
  // to create one quadrilateral every frame


  // -----------------------------------------
  // CHANGE i
  // -----------------------------------------

  let shiftAmount = j % 3;

  // modulo 3 produces:
  //
  // 0 → 1 → 2 → 0 → 1 → 2...
  //
  // this controls the bit shift below


  i = i << shiftAmount;

  // << is a LEFT BIT SHIFT
  //
  // roughly:
  //
  // i << 0 = i x 1
  // i << 1 = i x 2
  // i << 2 = i x 4
  //
  // therefore i changes at different speeds
  // depending on the result of j % 3


  i = i % 1200;

  // same %1200 limit as the original
  //
  // this prevents i from continuously increasing
  // and wraps its value around
  //
  // e.g.
  // 1200 % 1200 = 0
  // 1250 % 1200 = 50


  // -----------------------------------------
  // CHANGE j
  // -----------------------------------------

  j = j % s;

  // since s = 900:
  //
  // j = j % 900
  //
  // therefore j remains within 0-899
  // before wrapping around again
}