'use strict';

//value
let state = 'title';
let cnv;
let x = 0; 
let y = 0;
// let l = 600;
// let h = 600;

//image
let badkey;
let goodkey;
let arets;
let bgvillage;
let clownHappy;
let clownScary;
let clownSmile;
let clownSprite;
let clownStare;
let clown;
let dialogueBox;
let meat;
let stall;
let mainBG;
let mcSprite;
let mission;
let restaurant
let shownClown;
let villageBG;
let stallBG;
let storyBox;
let thugSmirk;
let thugYelled;


function preload(){
  badkey = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/666key.PNG');
  goodkey = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/888key.PNG');
  arets = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Arets.PNG');
  bgvillage = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/BGvillage.png');
  clownHappy = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown%20happy.PNG');
  clownScary = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown%20scary.PNG');
  clownSmile = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown%20smile.PNG');
  clownSprite = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown%20sprite.GIF');
  clownStare = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown%20stare.PNG');
  clown = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Clown.PNG');
  dialogueBox = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Dialogue%20box.PNG');
  meat = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Fairies%20meat%20plate.PNG');
  stall = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Food%20stall.PNG');
  mainBG = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/MC.GIF');
  mcSprite = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Main%20street.PNG');
  mission = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Mission.PNG');
  restaurant = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Restaurant.PNG');
  shownClown = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/show%20clown-1.PNG');
  villageBG = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/show%20clown-2.PNG');
  stallBG = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Stall%20clown.PNG');
  storyBox = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Story%20box.PNG');
  thugSmirk = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Thug%20smirk.PNG');
  thugYelled = loadImage('https://raw.githubusercontent.com/ngantran-azure/Test-game/main/assets/Thug%20yelled.PNG');
}

function setup() {
  cnv = createCanvas(600, 600);
  
  textFont('Courier New');
  textAlign(CENTER, TOP);
}

function draw() {
  if (keyIsDown('a')){
    x = x - 2;
  } else if (keyIsDown('d')){
    x= x + 2;
  } 
  if (keyIsDown('w')){
    y = y -2;
  }else if (keyIsDown('s')){
    y = y + 2;
  }

  

  switch(state){
    case 'title':
      image(bgvillage, 0, 0, width, height);
      textSize(30);
      text('Tales of the Foolish Justice', 300,50);
    
      textSize(15);
      textAlign(CENTER, BOTTOM)
      text('Click anywhere to start', 300,450);
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'mission':
      background(mission);

  }


  // if (state ==='title'){
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state === 'level 1'){
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // }else if (state === 'level 2'){
  //   level2();
  // }

}


function title() {
  background(120);

}

function titleMouseClicked(){
    state = 'mission';
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