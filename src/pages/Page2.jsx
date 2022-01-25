import {Page, TextView, Stack} from 'tabris';
import {Slider, contentView} from 'tabris';
export class Page2 extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Slider', ...properties}).append(

    new Slider({
      left: 16, right: 16,
      selection: 50
    }).onSelect(({selection}) => console.log(`Slider is at ${selection}`)).appendTo(contentView),
 )}}