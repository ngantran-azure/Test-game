// 'use strict';

//value
let state = 'title';
let cnv;
let w = 600;
let h= 600;
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
let next;
let restaurant;
let shownClown;
let villageBG;
let stallBG;
let storyBox;
let thugSmirk;
let thugYelled;


function preload(){
  badkey = loadImage('assets/666key.PNG');
  goodkey = loadImage('assets/888 key.PNG');
  arets = loadImage('assets/Arets.PNG');
  bgvillage = loadImage('assets/BG village.png');
  clownHappy = loadImage('assets/Clown happy.PNG');
  clownScary = loadImage('assets/Clown scary.PNG');
  clownSmile = loadImage('assets/Clown smile.PNG');
  clownSprite = loadImage('assets/Clown sprite.GIF');
  clownStare = loadImage('assets/Clown stare.PNG');
  clown = loadImage('assets/Clown.PNG');
  dialogueBox = loadImage('assets/Dialogue.PNG');
  meat = loadImage('assets/meat.PNG');
  stall = loadImage('assets/Food stall.PNG');
  mainBG = loadImage('assets/Main street.PNG');
  mcSprite = loadImage('assets/MC.GIF');
  mission = loadImage('assets/Mission.PNG');
  next = loadImage('assets/next.PNG');
  restaurant = loadImage('assets/Restaurant.PNG');
  shownClown = loadImage('assets/show clown.PNG');
  villageBG = loadImage('assets/villageBG.PNG');
  stallBG = loadImage('assets/Stall clown.PNG');
  storyBox = loadImage('assets/Story box.PNG');
  thugSmirk = loadImage('assets/Thug smirk.PNG');
  thugYelled = loadImage('assets/Thug yelled.PNG');
}




function setup() {
  cnv = createCanvas(w, h);
  
  textFont('Courier New');
  textAlign(CENTER);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)){
    x -= 2;
  } else if (keyIsDown(RIGHT_ARROW)){
    x += 2;
  } else if (keyIsDown('UP_ARROW')){
    y = y -2;
  }else if (keyIsDown('DOWN_ARROW')){
    y = y + 2;
  }

  

  switch(state){
    case 'title':
      image(bgvillage, 0, 0, w, h);
      textSize(30);
      stroke(0);
      text('Tales of the Foolish Justice', 300,50);
    
      textSize(20);
      textAlign(BOTTOM)
      stroke(220);
      strokeWeight(1);
      text('Click anywhere to start', 300,450);
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'mission':
      background(bgvillage);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      stroke(0);
      textAlign(LEFT);
      text('You work for a secret mail delivery service. Your job is to deliver top secret mails to the receiver within the assigned duration.', 120, 425, 400, 100);
      cnv.mouseClicked(missionMouseClicked);
      break;

    case 'mission-1':
      background(bgvillage);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      stroke(0);
      text('Failed to do so would result in the destruction of your family and anyone closed to you', 120, 425, 400, 100);
      cnv.mouseClicked(mission1MouseClicked);
      break;

    case 'mission-2':
      background(mission);
      // image(storyBox, 50, 125, 500, 450 );
      image(next, 520, 500, 50, 50);
      cnv.mouseClicked(mission2MouseClicked);
      break;

    case 'mission-3':
      background(mission);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text('Your mission this time is to deliver a confidential mail to sir Earl Modnar. The mail has to be delivered in 4 days.', 120, 425, 400, 100);
      cnv.mouseClicked(mission3MouseClicked);
      break;

    case 'mission-4':
      background(mission);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text('You will disguise as a merchant travelling to Fort Domranis. Sir Earl Modnar would be there for a family visit. Deliver this to his personal butler.', 120, 425, 400, 120);
      cnv.mouseClicked(mission4MouseClicked);
      break;

    case 'getintown':
      background(villageBG);
      image(mcSprite,-120,250);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text('You have been on the mission for 2 days. Fort Domnaris is only half a day away from the nearest town.', 120, 425, 400, 120);
      cnv.mouseClicked(getInTownMouseClicked);
      break;  

    case 'getintown-1':
      background(villageBG);
      image(mcSprite, -120, 250);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text('Exhausted from being on the horse, you decided to stop at the nearest town and rest for the night.', 120, 425, 400, 120);
      cnv.mouseClicked(getInTown1MouseClicked);
      break; 

    case 'getintown-move':
      background(villageBG);
      image(mcSprite, x-120, 250);
      if (x == 500){
        state = 'mainstreet';
        x = 0
      } else if (x <= 120){
        x ==120
      }

      push();
      textSize(15);
      textAlign(RIGHT);
      fill(220);
      stroke(220);
      text('This way to get in town -->',570, 550);
      pop();
      break;

    case 'mainstreet':
      image(mainBG, -600, 0, 1800,600)
      image(mcSprite, x-300, 50 , 500, 500);
      if (x >= 200){
        x = -100;
        image(storyBox, 50, 125, 500, 450 );
        image(next, 475, 510, 30, 30);
        fill(0);
        stroke(0);
        textSize(20);
        text('man', 120, 425, 400, 120);
      }
      break;
  }
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




function titleMouseClicked(){
    state = 'mission';
}

function missionMouseClicked(){
  state = 'mission-1';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission2MouseClicked(){
  state = 'mission-3';
}

function mission3MouseClicked(){
  state = 'mission-4';
}

function mission4MouseClicked(){
  state = 'getintown';
}

function getInTownMouseClicked(){
  state = 'getintown-1';
}

function getInTown1MouseClicked(){
  state = 'getintown-move';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}
