class ContinueButton{
    constructor(img){
        this.text = "continue";
        this.img = img;
        this.h = 30;
        this.w = 120;        
        this.x = config.frameW/2 - 80;  
        this.y = config.frameH -this.h - 120;
    }

    show(){        
        //text(this.text, this.x, this.y, 55, 122 );
        image(this.img, this.x, this.y, this.w, this.h);        
    }
}