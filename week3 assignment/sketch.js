s=900,i=j=0; //creating variables for the canvas size//
function setup() //function to setup the canvas
{createCanvas(s,s);//creating a 900x900 canvas(square)//
    stroke(255,9);// setting the stroke color to white with an alpha of 9//
    fill(9,3)}//setting the fill color to black with an alpha of 3//
    function draw()//function to draw the shapes which runs over and over again(usually 60 times per second)//
    {quad//gives4points?// 
        (i++,j++,j,i,s-i,i-50,s-j,j);//draws a quadrilateral with the given points//
        i=(i<<j%4)%1200;
        j=j%s}// next, the variable i is updated by shifting it left by j modulo 4 and then taking the result modulo 1200. The variable j is updated by taking it modulo s (900). This creates a dynamic effect as the quadrilateral changes its shape and position over time.//
