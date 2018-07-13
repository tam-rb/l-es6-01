class Menu{    
    constructor(img){
        this.w = 100;
        this.h = 50;
        this.x = config.frameW - this.w;  
        this.y = config.frameH -this.h;
        this.backgroundImage = img;
    } 

    show() {
        image(this.backgroundImage, this.x, this.y, this.w, this.h);        
    }      
}