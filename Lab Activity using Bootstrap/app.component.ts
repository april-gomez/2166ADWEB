import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This string is interpolated';
  clientName = 'April Gomez';
  appliedCSS = 'green';
  notAppliedCSS = false;
  myColor = 'red';  
  
  

  clickCount = 0  
    clickMe() {
      this.clickCount++;
    }
  
    resetClickCount() {
      this.clickCount = 0;
    }

  liked = 0
    like() {
      this.liked++;
    }

    newColor = '';

    violetColor(){
      this.newColor = 'violet';
    }

    pinkColor(){
      this.newColor = 'pink';
    }

    greenColor(){
      this.newColor = 'green';
    }
}