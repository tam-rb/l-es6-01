// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Milestone(yr) {
  this.h = 233;  
  this.w = 400;
  
  this.topH = config.cloudTop();
  this.year = yr;  

  this.bottomH = height - 100;;
  this.x = width + (200 - 144)/2;
  this.speed = config.screenSpeed;

this.preload = function(){
    this.milestoneImg = loadImage("images/milestones/" + this.year + ".png");
}
   this.show = function() {
     image(this.milestoneImg, this.x, this.topH, this.w, this.h);
   
  }

  this.update = function() {    
      if(bird.alive && !bird.isWinner){
        this.x -= this.speed;     
      }

  }  

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
