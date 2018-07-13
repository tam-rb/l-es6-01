class ContinueButton{
    constructor(img){
        this.text = "continue";
        this.img = img;
        this.h = 30;
        this.w = 120;
        this.x = width/2 - this.w/2;  
        this.y = height / 2 - this.h/2 + 350;
    }

    show(){        
        //text(this.text, this.x, this.y, 55, 122 );
        image(this.img, this.x, this.y, this.w, this.h);        
    }
}