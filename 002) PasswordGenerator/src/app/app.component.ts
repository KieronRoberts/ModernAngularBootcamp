import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parseValue = parseInt(target.value);

    if (!isNaN(parseValue)) {
      this.length = parseValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  
  onButtonClick(){
    const numbers = '0123456789';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@£$%^&*()';

    let validChars = '';
      if (this.includeLetters){
        validChars += letters;
      }

      if (this.includeNumbers){
        validChars += numbers;
      }

      if (this.includeSymbols){
        validChars += symbols;
      }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword
  }
}
