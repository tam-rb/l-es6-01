import $ from 'jquery';

export class BaseElement{
    constructor (){
        this.element = null;
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }
    
    createElement(){
        let s= this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'please override getElementString() in BaseElementJquery';
    }

    enableJS(){
        componentHandler.upgradeElement(this.element[0]);
    }
}