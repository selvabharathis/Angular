import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myText: string = 'Hello Everyone !!!';
  textColor: string;
  finalColor: string = 'black';
  tellColor() {
    this.finalColor = this.textColor;
  }
}
