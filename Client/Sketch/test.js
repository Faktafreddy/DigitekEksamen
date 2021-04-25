let socket = io.connect('http://localhost:8080');

let canvasX = 1500;
let canvasY = 900;
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

function countdown(input) {
    console.log("countdown igang")
    countDownStatus = true;
    timeLeft = input;
}

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
    createCanvas(canvasX, canvasY);
    background(backgroundcolor);
}

function op(){
    mus.y -= 110;
}
function ned(){
    mus.y += 110;
}
function hojre(){
    mus.x += 110;
}
function venstre(){
    mus.x -= 110;
}
function click(){
    if(rectX < mus.x + mus.diam &&
        rectX + rectXL > mus.x &&
        rectY < mus.y + mus.diam &&
        rectY + rectYL > mus.y) {
            bane = true;
        }
}


function draw(){       
    background(backgroundcolor);
    kasse(); //Kalder kasse function
    mus.display(); //Viser cursoren

    if (timeLeft <= 0 && countDownStatus === true) {
        countDownStatus = false;
    } else if(countDownStatus === true) {
        timeLeft -= 1/60;
        console.log(timeLeft);
    }

    socket.on('message', (data) =>{

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
      if (data == 5 && countDownStatus === false){
        console.log("click");
        click();
        countdown(2);
      }

      if (data == 6 && countDownStatus === false) {
          window.close()
          countdown(2);

      }
    
   
});

} //draw slut

function kasse(){       //Skaber en kasse(rect), og laver en ny når der bliver trykket på den originale.
    if (bane === true){ //Dette if statement gør at vores rect får sin størrelse og placering.
    rectX = Math.round(random(10, canvasX - 130));
    rectY = Math.round(random(10, canvasY - 130));
    rectXL = 120;
    rectYL = 120;
    bane = false;       //Dette if statement kører kun en gang fordi den kræver bane === true, men bane bliver til false når den kører, så vi kun har en rect med den rigtige hitbox.
    }

    rect(rectX, rectY, rectXL, rectYL);     //Her skaber vi vores kasse med den data vi får fra vores if statement.

}