// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

class Bird {
  constructor(){
    this.alive = true;
    this.isWinner = false;
    this.y = config.frameH/2;
    this.x = 128;

    this.gravity = config.gravity;
    this.lift = -15;
    this.velocity = 0;
  }
  show() {
    fill(244, 149, 66);  
    ellipse(this.x, this.y, config.birdRadius, config.birdRadius);
  }

  up() {
    this.velocity += this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

  dead() {
    this.gravity= 0;
    this.lift = 0;
    this.alive = false;
  }

  newlife(){
    if(lives >0){
      lives -= 1;
      this.gravity = config.gravity;
      this.lift = -15;
      bird.x = bird.x + 80;
      this.alive = true;      
    }
  }

  won() {
    this.gravity= 0;
    this.lift = 0;
    this.isWinner = true;
  }
}
