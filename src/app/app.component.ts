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
  includeCapitals = false;
  password = "";

  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
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

  onChangeUseCapitals() {
    this.includeCapitals = !this.includeCapitals;
  }


  // onButtonClick() {
  //   this.password = "F*ck you!, no password";
  //   console.log(`Letters: ${this.includeLetters}`);
  //   console.log(`Numbers: ${this.includeNumbers}`);
  //   console.log(`Symbols: ${this.includeSymbols}`);
  //   console.log("***************************");
  // }


  onButtonClick() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()";

    let validCharset = "";
    if (this.includeLetters) {
      validCharset += letters;
    }

    if (this.includeNumbers) {
      validCharset += numbers;
    }

    if (this.includeSymbols) {
      validCharset += symbols;
    }

    if (this.includeCapitals) {
      validCharset += capitals;
    }

    let genPass = "";
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharset.length);
      genPass += validCharset[index];
    }
    this.password = genPass;
  }

  getPassword() {
    return this.password;
  }
}
