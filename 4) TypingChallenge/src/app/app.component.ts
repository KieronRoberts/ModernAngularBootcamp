import { Component } from '@angular/core';
import {lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  
  onInput(value: string) {
    this.enteredText = value;
    console.log(value);
    }

  compare(randomLetter: string, enteredLetter: string){
    if (!enteredLetter){
      return 'Pending';
    }
  
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
    
  }
}
