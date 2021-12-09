'use strict';



let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(600, 600);
  
}

function draw() {


  if (state ==='title'){
    title();
    cnv.mouseClicked(titleMouseClicked);
  } else if (state === 'level 1'){
    level1();
    cnv.mouseClicked(level1MouseClicked);
  }else if (state === 'level 2'){
    level2();
  }
}

// function canvasClicked(){
//   console.log('canvas is clicked');
// }

// function mousePressed(){
//   state = 'level 1';
// }

function title() {
  background(120);
  textFont('Courier New');
  textSize(30);
  textAlign(CENTER, TOP);
  stroke(0);
  text('Tales of the Foolish Justice', 300,50);

  textSize(15);
  textAlign(CENTER, BOTTOM)
  text('Click anywhere to start', 300,450);
}

function titleMouseClicked(){
    state = 'level 1';
}

function level1(){
  background(58, 79, 94);
}

function level1MouseClicked(){
  state = 'level 2';
}

function level2(){
  background(100);
}