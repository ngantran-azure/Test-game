// 'use strict';

//value
// let state = 'title';
let state = 'decision-2';
let cnv;
let box;
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
let showClown;
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
  showClown = loadImage('assets/show clown.PNG');
  villageBG = loadImage('assets/villageBG.PNG');
  stallBG = loadImage('assets/Stall clown.PNG');
  storyBox = loadImage('assets/Story box.PNG');
  thugSmirk = loadImage('assets/Thug smirk.PNG');
  thugYelled = loadImage('assets/Thug yelled.PNG');
}




function setup() {
  cnv = createCanvas(w, h);

  box= 
  
  textFont('Courier New');
  textAlign(CENTER);

  // button3 = createButton('Stand up for Clown');
  // button3.mousePressed(standUp);
  // button4 = createButton('Ignore the situation');
  // button4.mousePressed(ignore);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)){
    x -= 2;
  } else if (keyIsDown(RIGHT_ARROW)){
    x += 2;
  } else if (keyIsDown(UP_ARROW)){
    y = y -2;
  }else if (keyIsDown(DOWN_ARROW)){
    y = y + 2;
  }

  

  switch(state){

    case '1':
      break;

    case 'title':
      image(bgvillage, 0, 0, w, h);
      textSize(30);
      stroke(0);
      text('Tales of the Foolish Justice', 300,50);
    
      textSize(20);
      textAlign(BOTTOM)
      stroke(220);
      strokeWeight(1);
      text('Click anywhere to start', 300,500);
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'mission':
      background(bgvillage);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      stroke(0);
      textAlign(LEFT);
      text('You work for a secret mail delivery service. Your job is to deliver top secret mails to the receiver within the assigned duration.', 120, 425, 400, 120);
      cnv.mouseClicked(missionMouseClicked);
      break;

    case 'mission-1':
      background(bgvillage);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      stroke(0);
      text('Failed to do so would result in the destruction of your family and anyone closed to you', 120, 425, 400, 120);
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
      text('Your mission this time is to deliver a confidential mail to sir Earl Modnar. The mail has to be delivered in 4 days.', 120, 425, 400, 120);
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
      text('You have been on the mission for 2 days. Fort Domnaris is only half a day away from the nearest town.', 115, 425, 400, 120);
      cnv.mouseClicked(getInTownMouseClicked);
      break;  

    case 'getintown-1':
      background(villageBG);
      image(mcSprite, -120, 250);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text('Exhausted from being on the horse, you decided to stop at the nearest town and rest for the night.', 115, 425, 400, 120);
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
      image(mainBG, -600, 0, 1800,600);
      if (x <= 200){
        image(mcSprite,x-300, 50 , 500, 500);
      } else if(x > 200){
        image(mcSprite, -100, 50 , 500, 500);
        image(storyBox, 50, 125, 500, 450 );
        image(next, 475, 510, 30, 30);
        fill(0);
        stroke(0);
        textSize(20);
        text("Since it's close to Fort Domnaris, a fair amount of travelers also stop here to rest.", 115, 425, 400, 120);
        cnv.mouseClicked(mainstreetMouseClicked);
      }
      break;

    case 'mainstreet-1':
      image(mainBG, -600, 0, 1800,600);
      image(mcSprite, -100, 50 , 500, 500);
      image(storyBox, 50, 125, 500, 450 );
      image(next, 475, 510, 30, 30);
      text("You can hear your stomach rumble from the hunger. Your body is also exhausted from the long journey.", 115, 425, 400, 120);
      cnv.mouseClicked(mainstreet1MouseClicked);
      break;

    case 'mainstreet-1':
      image(mainBG, -600, 0, 1800, 600);
      image(mcSprite, -100, 50, 500, 500);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      text("There's a hotel right ahead, you can rent a room over there.", 115, 425, 400, 120);
      cnv.mouseClicked(mainstreet1MouseClicked);
      break;

    case 'mainstreet-2':
      image(mainBG, -600, 0, 1800, 600);
      image(mcSprite, -100, 50, 500, 500);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      text("But there's a food stall nearby that charms you with its delicious smell.", 115, 425, 400, 120);
      cnv.mouseClicked(mainstreet2MouseClicked);
      break;

    case 'mainstreet-3':
      image(mainBG, -600, 0, 1800, 600);
      image(mcSprite, -100, 50, 500, 500);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      text("The smell makes you crave for some grilled meat right now.", 115, 425, 400, 120);
      cnv.mouseClicked(mainstreet3MouseClicked);
      break;

    case 'decision1':
      image(mainBG, -400-x, 0, 1800, 600);
      image(mcSprite,- 100, y+50, 500, 500);

      if (x > 902) {
        x = 900
      } else if (x < -600){
        x = -600
      }
      if ( y < -38){
        y = -35
      } else if (y > 132){
        y= 130
      }


      if (x == 800 && y == -37){
        state = 'hotelbad';
      } else if (x == -450 && y == -37){
        state = 'stall';
      }
      
      push();
      textSize(15);
      fill(220);
      stroke(220);
      textAlign(RIGHT);
      text('This way to get to the hotel -->',570, 550);
      textAlign(LEFT);
      text("<-- This way to the food stall", 30, 580)
      pop();
      break;

    case 'hotelbad':
      background(badkey);
      break;

    case 'stall':

      image(stallBG, -60, -60, 1380, 690);
      image(mcSprite,x-500, y-50 , 800, 800);
      if (x < -100){
        x = -100
      } else if(x > 600){
        x = 600;
      }

      if (y<-50){
        y = -50
      } else if (y > 0){
        y = 0
      }

      if (x == 300 && y == -50){
        state = 'stall-1';
      }
      // image(next, 520, 500, 50, 50);
      // cnv.mouseClicked(stallMouseClicked);
      break;

    case 'stall-1':
      image(stallBG, -60, -60, 1380, 690);
      image(mcSprite,-200, -100 , 800, 800);
      image(storyBox, 50, -250, 500, 450 );
      image(next, 475, 140, 30, 30);
      fill(0);
      stroke(0);
      textAlign(LEFT)
      textSize(20);
      text("You follow the smell of grilled food to a small vendor near the center of the town.", 110, 50, 400, 120);
      cnv.mouseClicked(stall1MouseClicked);
      break;

    case 'stall-2':
      image(stallBG, -60, -60, 1380, 690);
      image(mcSprite,-200, -100 , 800, 800);
      image(storyBox, 50, -250, 500, 450);
      image(next, 475, 140, 30, 30);
      text("The owner is busy with the orders since it is a pretty famous stall, for both the town peoples and travelers.", 110, 50, 400, 120);
      cnv.mouseClicked(stall2MouseClicked);
      break;

    case 'stall-3':
      image(stallBG, -60, -60, 1380, 690);
      image(mcSprite,-200, -100 , 800, 800);
      image(storyBox, 50, -250, 500, 450);
      image(next, 475, 140, 30, 30);
      text("You get yourself two meat skewers and a veggie one. It tastes like heaven after putting rations in your belly for two days.", 110, 50, 400, 120);
      cnv.mouseClicked(stall3MouseClicked);
      break;

    case 'stall-4':
      image(stallBG, -60, -60, 1380, 690);
      image(mcSprite,-200, -100 , 800, 800);
      image(storyBox, 50, -250, 500, 450);
      image(next, 475, 140, 30, 30);
      text("Suddenly you hear cheering sound nearby. You decided to walk to the noisy crowd to see what happen", 110, 50, 400, 120);
      cnv.mouseClicked(stall4MouseClicked);
      break;

    case 'stall-move':
      image(stallBG, -60-x, -60, 1380, 690);
      image(mcSprite,-200, y-100 , 800, 800);
      if (x < -100){
        x = -100
      } else if(x > 1000){
        x = 1000;
      }

      if (y>50){
        y = 50
      } else if (y < -50){
        y = -50
      }
      if (x == 770 && y ==-50){
        state = 'show-clown';
      }
      textSize(15);
      fill(220);
      stroke(220);
      textAlign(RIGHT);
      text('This way to the crowd -->',570, 580);
      break;

    case 'show-clown':
      background(showClown);
      image(next, 520, 500, 50, 50);
      cnv.mouseClicked(showMouseClicked);
      break;

    case 'show-clown-1':
      background(showClown);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      fill(0);
      stroke(0);
      textAlign(LEFT);
      textSize(20);
      text("You got to the noisy crowd that catch your attention earlier. Apparently, there is a clown performing on the street that draws a lot of attention.", 115, 425, 400, 120);
      cnv.mouseClicked(show1MouseClicked);
      break;

    case 'show-clown-2':
      background(showClown);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      text("You can stay and watch the performance since you decided to stay the night here. But you can also focus on the mission and protect the confidential letter by not wandering places", 115, 425, 400, 120);
      cnv.mouseClicked(show2MouseClicked);
      break;

    case 'show-clown-3':
      background(showClown);
      image(storyBox, 50, 125, 500, 450);
      image(next, 475, 510, 30, 30);
      text("What would you do?", 115, 425, 400, 120);
      cnv.mouseClicked(show3MouseClicked);
      break;

    case 'decision-2':
       background(showClown);
       background(0,0,0,200);
      textAlign(CENTER, CENTER);
      fill(225);
      textSize(40);
      text("To be continue...",300,300)
      // background(showClown);
      // image(storyBox, 50, 125, 500, 450);
      // // // button1 = createButton('Focus on the Mission');
      // // // button1.style('background-color', color(200,200,200));
      // // // button1.style('font-size', '15px');
      // // // button1.size(150, 40)
      // // // button1.position(350,590);
      // // // button1.mousePressed(focusMission);

      // // strokeWeight(4);
      // // fill(200,200,200,100);
      // // textSize(20);
      // // text("Focus on the Mision", 350, 430, )
      // // box = rect(330, 350, 170, 50, 10);
      // // box.mouseClicked(focusMouseClicked);

      // fill(0);
      // textAlign(LEFT);
      // stroke(0);
      // textSize(20);
      // text("What would you do?", 115, 425, 400, 120);
      break;

    case 'leave':
      console.log(x);
      console.log(y);  
      image(stallBG, -60-x, -60, 1380, 690);
      image(mcSprite,-200, y-100 , 800, 800);
      if (x < -100){
        x = -100
      } else if(x > 1000){
        x = 1000;
      }

      if (y>50){
        y = 50
      } else if (y < -50){
        y = -50
      }
      if (x == 770 && y ==-50){
        state = 'show-clown';
      }
      break;

    case 'stay':

      break;



  }
}

////////////////////////////

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

function mainstreetMouseClicked(){
  state = 'mainstreet-1';
}

function mainstreet1MouseClicked(){
  state = 'mainstreet-2';
}

function mainstreet2MouseClicked(){
  state = 'mainstreet-3';
}

function mainstreet3MouseClicked(){
  state = 'decision1';
}

function hotelBadMouseClicked(){
  state = 'hotelbad-1';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function stallMouseClicked(){
  state = 'stall-1';
}

function stall1MouseClicked(){
  state = 'stall-2';
}

function stall2MouseClicked(){
  state = 'stall-3';
}

function stall3MouseClicked(){
  state = 'stall-4';
}

function stall4MouseClicked(){
  state = 'stall-move';
}

function showMouseClicked(){
  state = 'show-clown-1';
}

function show1MouseClicked(){
  state = 'show-clown-2';
}

function show3MouseClicked(){
  state = 'decision-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function mission1MouseClicked(){
  state = 'mission-2';
}

function focusMouseClicked(){
  state = 'leave';
}

function watchClown(){
  state = 'stay';
}

function standUp(){
  state = 'fight with clown';
}

function ignore(){
  state = 'insult';
}