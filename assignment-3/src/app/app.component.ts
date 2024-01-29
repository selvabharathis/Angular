import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-three';
  mov: string;
  setMov(abc: string) {
    this.mov = abc;
  }
}
