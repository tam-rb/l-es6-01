// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var pipes;
var bg;
var question;
var menu;
var milestones;
var winner;
var gameLength = 4;
var count = 0;
var cloudcount = 0;
var questionId = 0;
var config = new Config();
var newGameButton;
var nintexAbout;
var continueImg;
var cloudImg;
this.lives = 1;

var aboutText = ["Digital Workflow automation",                  
                  "CI/CD",
                  "AWS",
                  "Docker",
                  "Angular",
                  "Selenium",
                  "BDD",
                  "Jasmine",
                  "People",
                  "Respect",
                  "Agile",
                  "SCRUM"  ,
                  "Kanban"                  
                ];

function preload(){
    newGameButton = loadImage("images/NewGameButton.png");
    bg = loadImage("images/background.jpg");
    continueImg = loadImage("images/continue.png");
    cloudImg = loadImage("images/cloud.png");   
}   

function setup() {
  createCanvas(config.frameW, config.frameH);
  menu = new Menu(newGameButton);
  this.newGame();
}

function newGame(){
  pipes = []; 
  nintexAbout = [];
  pipes.push(new Pipe());
  nintexAbout.push(new NintexAbout(aboutText[0]));
  bird = new Bird(); 
}

function draw() {
  background(bg);  
  for(let i = nintexAbout.length - 1; i >=0; i--){
    drawNintexAbout(i);
  }
  for (let i = pipes.length-1; i >= 0; i--) {
    drawPipes(i);
  } 

  bird.update();
  bird.show();
  menu.show();

  if(!bird.alive){
    if(lives >0){
      let id = questionId;    
      question = new Question(id);
      question.show();
      continueButton = new ContinueButton(continueImg);
      continueButton.show();
    }
    else{
      question = new Question(-1);
      question.show();
    }
  }

  if (bird.isWinner){
    question = new Question(2);
    question.show();
  }

  if(bird.alive){
    questionId = 1 + round(Math.random()*10000) % 5;
    if (frameCount % 200 == 0) {
      count ++;
      if(count < gameLength)
      {
        pipes.push(new Pipe());
      }     
    } 
  }    
  
  if(frameCount % 90 == 0){
    cloudcount ++;
    if(cloudcount < aboutText.length){
      nintexAbout.push(new NintexAbout(aboutText[cloudcount]));
    }
    else{
      cloudcount = 0;
    }
  }

  if(pipes.length < 1){
    bird.won();  
  }
  textSize(18);
  text("lives: " + lives, 5, config.frameH -10);
}

function drawPipes(i){
  pipes[i].display();
    pipes[i].update();

    if (pipes[i].hit(bird)) {
      bird.dead();
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
}

function drawNintexAbout(i){
    nintexAbout[i].show();
    nintexAbout[i].update(); 
    
    if (nintexAbout[i].offscreen()) {
      nintexAbout.splice(i, 1);
    }
}

function drawMilestones(){
  /*
    milestones[i].show();
    milestones[i].update();

    if(milestones[i].offscreen()){
     milestones.splice(i, 1);
    }    
  }
  */
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function mousePressed(){
  if(mouseX > menu.x){
    //this.newGame();
    location.reload();    
  }

  if(mouseX > continueButton.x && mouseX < continueButton.x + continueButton.w){
    if(mouseY > continueButton.y && mouseY < continueButton.y + continueButton.h){
      bird.newlife();
      question.h = 0;
      question.w = 0;
      continueButton.x= -5000;
    }
  }
}
