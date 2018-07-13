class Config {
    constructor(){    
        this.frameW = $(window).width()-100;
        this.frameH = $(window).height()-100;                
        this.gravity = 0.8;
        this.screenSpeed = 3;
        this.birdRadius = 50;
    }

    pipeGap() {
        return 90 + Math.floor(Math.random()*this.birdRadius + 1);    
    }     

    cloudTop() {
        var ph = Math.floor(Math.random()*config.frameH + 1);
        if(ph > config.frameH - 200){
            ph = config.frameH-200;
        }

        if(ph <= 200){
            ph = 100;
        }
        
        return ph;
    }  

    pipeHeight() {
        var ph = Math.floor(Math.random()*config.frameH + 1);
        if(ph >= 8*config.frameH/10){
            ph = 4*config.frameH/10;
        }

        if(ph <= 2*config.frameH/10){
            ph = 3* ph;
        }
        
        return ph;
    }
}