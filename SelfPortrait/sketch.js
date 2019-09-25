let img;
let earY = 40;
let eyebrowY= 0;
let arcx = 100;
function setup() {

    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    cnv.parent('content'); //this puts my sketch in a div
//    img = loadImage('space.jpg'); 
}

function draw() {
    background('#4B4B4C');
//    earY = map(mouseY, 0, height, 35, 45);
     eyebrowY = map(mouseY,0, height, 0 ,15);
    
    
//    image(img,0,0,width, height);
    
    //head shape

    fill(255, 219, 172);
    push();
    noStroke();
    translate(300,300);
    ellipse(255,55,375,375);
    pop();
    
    // left ear

     fill(255, 219, 172);
     
    push ();
    noStroke();
    translate (300,300);
    ellipse ( 165,earY,210,200);
    pop();

// right ear
     fill(255, 219, 172);
    
    push ();
    noStroke();
    translate (300,300);
    ellipse (345,earY,210,200);
    pop();
 
    //eyes

    fill (0,0,0);
    push ();
    translate(300, 300);
    rect(150, 0, 55, 55, 25, 25);  
    rect(300, 0, 55, 55, 25, 25);
    pop();
    // Eyebrows
    fill (0,0,0);
    push ();
    translate(285, 275);
    rect(150, eyebrowY, 85, 15, 25, 25);  
    rect(300, eyebrowY, 85, 15, 25, 25);
    pop();
    
    //mouth 
    push();
    translate(300,300);
    line(200, 130,300, 130);
    stroke(126);
    pop();
    
    push();
    translate(100,100);
    noFill();
    for(let i=0; i<20; i++) {
// right part        
 arc( 425,100 + i*5,370,  55, 1.3*PI, 2.*PI);  
  // left part      
 arc( 350,100 + i*5, 175, 55, 1.1*PI, 1.7* PI);}
   pop();
    push();
    translate ( 300,300);
    //nose x1, y1, x2, y2, x3, y3, x4, y4
    quad(240, 70, 275, 100, 240, 100, 240, 80);
    console.log("X: " + mouseX);

    
    
    
    
    
    console.log("Y: " + mouseY);  
}









