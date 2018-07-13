class Question{    
    constructor(id){
        this.w = config.frameW - 100;
        this.h = config.frameH - 100;
        this.x = width/2 - this.w/2;  
        this.y = height / 2 - this.h/2;  
        this.fontsize = 32;
        this.id = id;
    }
    
    show(){
        textSize(this.fontsize);
        fill(255);   ;
        rect(50, 50, this.w, this.h);

        fill(255, 102, 0);
        
        text(this.getQuestion(this.id), this.w/2 - 180, this.h/2 - 10);
    }

    update(){
        
    }

    getQuestion(id){  
        if(id === -1){
            return "\t\t\tGame over!";
        }
        let msg = "Question challenge: \n\n";
        return msg + this.questionList().questions.find(item => item.id === id).question;
    }

    questionList(){
        return {"questions": [
            {
                "id": 1,
                "question": "What do you know about Nintex?"
            },
            {
                "id": 2,
                "question": "Name a few technologies that Nintex is using?"
            },
            {
                "id": 3,
                "question": "Name a testing framework Nintex is using?"
            },
            {
                "id": 4,
                "question": "Is Nintex Using Angular?"
            },
            {    
                "id": 5,
                "question": "Which technologies is Nintex using?"
            },
        ]
        }
    }
}