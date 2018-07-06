import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public menu: any[] = [];

  constructor() {
    this.menu = [
      {
        label: 'Lien vers App 2',
        link: 'http://localhost:4100/'
      }, {
        label: 'Lien vers Jougle',
        link: 'https://www.google.fr/'
      }
    ];

    const toStore = {
      from: 'app1',
      to: 'app2',
      data: {
        menu: this.menu
      }
    };
    localStorage.setItem('multi-app', JSON.stringify(toStore));
  }
}
