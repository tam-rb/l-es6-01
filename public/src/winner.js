function Winner(){    
    this.w = 320;
    this.h = 200;
    this.x = width/2 - this.w/2;  
    this.y = height / 2 - this.h/2;  
    this.fontsize = 36;
        

    this.show = function (){
        textSize(this.fontsize);
        //fill(249, 249, 249, 239)   ;
        bg = loadImage("images/background.jpg"); 
        rect(50, 50, frame.w - 100, frame.h - 100);

        fill(255, 0, 0);

        var message = "Well done! \n You win!";
        text(message, this.x, this.y);
    }

    this.update = function(){

    }
}