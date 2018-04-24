import $ from 'jquery';
import { Button } from './ui/button.js';

let b = new Button('Click me');
b.appendToElement($('body'));