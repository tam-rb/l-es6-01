import {BaseElementJquery} from './base-element-jquery.js';

export class Button extends BaseElementJquery {
    constructor(title){
        super();
        this.title = title;
    }

    getElementString(){
        return  `
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        ${this.title}
      </button>
        `
    }
}