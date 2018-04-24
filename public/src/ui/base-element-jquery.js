import $ from 'jquery';

export class BaseElementJquery{
    constructor (){
        this.element = null;
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
    }
    
    createElement(){
        let s= this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'please override getElementString() in BaseElementJquery';
    }
}