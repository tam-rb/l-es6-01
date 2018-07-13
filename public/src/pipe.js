// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

class Pipe {
  constructor(){
    this.pipeHeight = config.pipeHeight();   
    this.gap = config.pipeGap();
    this.topH = this.pipeHeight;    
    this.x = width - (200 - 144);
    this.w = 60;
    this.speed = config.screenSpeed;
    this.highlight = false;
  } 

  display() {
    fill(210);
    if (this.highlight) {
      fill(255, 0, 0);      
    }
    rect(this.x, 0, this.w, this.topH);
    rect(this.x, this.topH + this.gap, this.w, config.frameH);
  }

  update() {    
      if(bird.alive && !bird.isWinner){
        this.x -= this.speed;     
      }
  }  

  hit(bird){    
    if (bird.y - config.birdRadius/2 < this.topH  || bird.y + config.birdRadius/2 > this.topH + this.gap) {      
      if (bird.x > this.x && bird.x < this.x + this.w) {
        console.log(this.x);
        this.highlight = true;
        return true;
      }
    }

    this.highlight = false;
    return false;
}

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
