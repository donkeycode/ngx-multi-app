import { Component, ViewEncapsulation } from '@angular/core';
import { menuWaitingFromBack, menuFetchedFromBack } from '../../../menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public menu: any[] = menuWaitingFromBack;
  public fetching: boolean = true;

  constructor() {
    let storedData: any = localStorage.getItem('multi-app');
    if (storedData) {
      this.fetching = false;
      storedData = JSON.parse(storedData);
      this.menu = storedData.data.menu;
      return;
    }

    setTimeout(() => {
      this.fetching = false;
      this.menu = menuFetchedFromBack;

      const toStore = {
        from: 'app1',
        to: 'app2',
        data: {
          menu: this.menu
        }
      };
      localStorage.setItem('multi-app', JSON.stringify(toStore));
    }, 3000);
  }
}
