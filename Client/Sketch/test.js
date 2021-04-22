let socket = io.connect('http://localhost:8080');

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





/*var Wekinator = require('wekinator');
var wn = new Wekinator();
wn.connect(function(){
  wn.train();
  setTimeout(function(){
    wn.disconnect();
  },100);
});*/

function setup() {
    createCanvas(canvasX, canvasY);
    background(backgroundcolor);

    cursor = loadImage('pointer.png');

}

function draw(){        //NOTER: Fix så Pil afstand ikke virker med pil længde, men til centrum
    //noStroke()
    //fill(0)
    background(backgroundcolor);
    image(cursor, cursorX, cursorY);
    if (keyCode === 49) {
        side = 1
    }
    if (keyCode === 50) {
        side = 2
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

if (side === 1){
    console.log("Side = 1")
    move = 5;
    if (keyIsDown(LEFT_ARROW)) {
        cursorX -= move;
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        cursorX += move;
      }
    
      if (keyIsDown(UP_ARROW)) {
        cursorY -= move;
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        cursorY += move;
      }
    }

    if (side === 2){
        console.log("KeyPressed")
    //function keyPressed() {
        move = 0
        if (keyCode === LEFT_ARROW && keyIsPressed === true) {
            move = 100;
            cursorX -= move;
            move = 0;
            keyCode = 51
        } else if (keyCode === RIGHT_ARROW && keyIsPressed === true) {
            move = 100;
            cursorX += move;
            move = 0;
            keyCode = 51;
        } else if (keyCode === UP_ARROW && keyIsPressed === true) {
            move = 100;
            cursorY -= move;
            move = 0;
            keyCode = 51
        } else if (keyCode === DOWN_ARROW && keyIsPressed === true) {
            move = 100;
            cursorY += move;
            move = 0;
            keyCode = 51
        } else if (keyCode === SHIFT) {
            move += change;
        } else if (keyCode === CONTROL) {
            move -= change;
        }
    
        }
      //}

} //draw slut


