class NintexAbout{
    constructor(text){              
        this.x = width + (200 - 144)/2;
        //this.y = config.frameH - 20;
        this.y = this.getRandom();
        this.speed = config.screenSpeed + 1;
        this.text = text;
        this.w = text.length*20 < 240? 240:text.length*20;
        this.h = 140;
        this.fontsize = 36;
        this.img = cloudImg;
    }

    show(){
        this.drawCloud();
        textSize(this.fontsize);
        fill(0);       
        text(this.text, this.x+50, this.y+80 );
        
    }

    drawCloud(){
        image(this.img, this.x, this.y, this.w, this.h);  
    }
    getRandom(){
        var myNumber = Math.floor(Math.random()*18);
        myNumber = myNumber *50 + 65;
        if(myNumber > config.frameH - 100){
            myNumber = myNumber - 100;
        }
        return myNumber;
    }

    offscreen() {
        if (this.x < -this.w) {
          return true;
        } else {
          return false;
        }
      }

      update() {       
          this.x -= this.speed;
      } 
}