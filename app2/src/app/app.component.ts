import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public data = {};

  constructor() {
    let storedData = localStorage.getItem('multi-app');
    if (storedData) {
      this.data = JSON.parse(storedData);
    }
  }
}
