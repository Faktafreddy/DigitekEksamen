let canvasX = 800;
let canvasY = 700;
let backgroundcolor = 153;
let cursorX = 100;
var cursorY = 150;
let cursor;
let move = 0;
let change = 25;
let rectT = 10;
let side = 0;

let imgX = 20/4;
let imgY = 26/4;

var rectX = 0;
var rectY = 0;
var rectXL = 0;
var rectYL = 0;

var timeLeft = 0;
var countDownStatus = false;

var bane = true;
var start = false;

function countdown(input) {
    console.log("countdown igang")
    countDownStatus = true;
    timeLeft = input;
}



/*var Wekinator = require('wekinator');
var wn = new Wekinator();
wn.connect(function(){
  wn.train();
  setTimeout(function(){
    wn.disconnect();
  },100);
});*/

class pointer{

    constructor(x, y, diam, farve){
    this.x = x;
    this.y = y;
    this.diam = diam;
    this.col = farve;
    }

    display(){
        fill(this.col);
        stroke(15);
        ellipse(this.x, this.y, this.diam, this.diam)
    }
}

var mus = new pointer(canvasX/2, canvasY/2, 15, 255)

function setup() {
 //   cursor = loadImage('pointer.png');
    createCanvas(canvasX, canvasY);
    background(backgroundcolor);

    //cursor = loadImage('pointer.png');

}

function op(){
    mus.y += 50;
}
function ned(){
    mus.y -= 50;
}
function hojre(){
    mus.x += 50;
}
function venstre(){
    mus.x -= 50;
}


function draw(){        //NOTER: Fix så Pil afstand ikke virker med pil længde, men til centrum
    //noStroke()
    //fill(0)
    background(backgroundcolor);
    //image(cursor, cursorX, cursorY);
    mus.display();

    if (timeLeft <= 0 && countDownStatus === true) {
        countDownStatus = false;
    } else if(countDownStatus === true) {
        timeLeft -= 1/60;
        console.log(timeLeft);
    }

    if (start === true){
        kasse();
    }


    
    if (keyCode === 51 && rectX < cursorX + imgX &&
        rectX + rectXL > cursorX &&
        rectY < cursorY + imgY &&
        rectY + rectYL > cursorY) {
            bane = true;
         // collision detected!
     }
    

    //rect(Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1));
    if (keyCode === 49) {
        side = 2
    }
    if (keyCode === 50) {
        //side = 2
        start = true;
    }

    if (side === 2){
        
    /*
    rect(cursorX + imgX, cursorY - (move + 10), rectT, move); //Pil op
    rect(cursorX + imgX, cursorY + 36, rectT, move); //Pil ned
    rect(cursorX + (imgX * 4) + 10, cursorY + imgY, move, rectT); //Pil højre
    rect(cursorX - move - 10, cursorY + imgY, move, rectT); //Pil venstre
    */

    /*if (keyIsPressed === true && keyCode === LEFT_ARROW) {
        cursorX -= move;
        //keyCode = 51;
        
    } else if (keyCode === RIGHT_ARROW) {
        cursorX += move;
    } else if (keyCode === UP_ARROW) {
        cursorY -= move;
    } else if (keyCode === DOWN_ARROW) {
        cursorY += move;
    } else if (keyCode === SHIFT) {
        move += change;
    } else if (keyCode === CONTROL) {
        move -= change;
    }*/
    }

    socket.on('message', (data) =>{

//if (side === 1){
    //console.log("Side = 1")
    //move = 5;
    if (data == 1 && countDownStatus === false) {
        console.log("venstre");
        venstre();
        countdown(2);
      }
    
      if (data == 2 && countDownStatus === false) {
        console.log("hojre");
        hojre();
        countdown(2);

      }
    
      if (data == 3 && countDownStatus === false) {
        console.log("op");
        op();
        countdown(2);

      }
    
      if (data == 4 && countDownStatus === false) {
        console.log("ned");
        ned();
        countdown(2);

      }
      if (data == 5 && countDownStatus === false) {
        console.log("click");
        countdown(2);

        
      }
      if (data == 6 && countDownStatus === false) {
          window.close()
          countdown(2);

      }
    
   
});

    if (side === 2){
        console.log("KeyPressed")
    //function keyPressed() {
        move = 0
        if (keyCode === LEFT_ARROW && keyIsPressed === true) {
            move = 100;
            mus.x -= move;
            move = 0;
            keyCode = 52;
        } else if (keyCode === RIGHT_ARROW && keyIsPressed === true) {
            move = 100;
            mus.x += move;
            move = 0;
            keyCode = 52;
        } else if (keyCode === UP_ARROW && keyIsPressed === true) {
            move = 100;
            mus.y -= move;
            move = 0;
            keyCode = 52;
        } else if (keyCode === DOWN_ARROW && keyIsPressed === true) {
            move = 100;
            mus.y += move;
            move = 0;
            keyCode = 52;
        } else if (keyCode === SHIFT) {
            move += change;
        } else if (keyCode === CONTROL) {
            move -= change;
        }
    
        }
      //}

} //draw slut

function kasse(){
    if (bane === true){
    rectX = 120;
    rectY = 120;
    rectXL = Math.round(random(10, canvasX - 130));
    rectYL = Math.round(random(10, canvasY - 130));
    bane = false;
    }

    rect(rectX, rectY, rectXL, rectYL);

}