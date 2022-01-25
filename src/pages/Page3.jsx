import {Page, TextView, Switch, contentView, ToggleButton} from 'tabris';



export class Page3 extends Page {
 constructor(properties) {
 super();
 this.set({title: 'Switch/Toggle', ...properties}).append( 
   
    new Switch({top: 10, left: 20})
  .onSelect(() => console.log('Switch toggled'))
  .appendTo(contentView));
 
    new ToggleButton({text: 'Toggle button', left: 200, top: 70},)
  .onSelect(() => console.log('ToggleButton toggled'))
  .appendTo(contentView);
    
 }}