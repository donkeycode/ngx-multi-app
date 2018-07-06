import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'layout-menu',
  template: `
    <div *ngFor="let link of _links">
      <a [attr.href]="link.link" *ngIf="!link.loading">{{ link.label }}</a>
      <div class="post" *ngIf="link.loading">
        <div class="avatar"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
  `,
  styles: [
    `
    .post {
      width: 220px;
      height: 80px; }

    .post .avatar {
        float: left;
        width: 52px;
        height: 52px;
        background-color: #ccc;
        border-radius: 25%;
        margin: 8px;
        background-image: linear-gradient(90deg, #f00 0px, #e8e8e8 40px, #ddd 80px);
        background-size: 600px;
        -webkit-animation: shine-avatar 0.9s infinite linear;
                animation: shine-avatar 0.9s infinite linear; }

    .post .line {
        float: left;
        width: 140px;
        height: 16px;
        margin-top: 12px;
        border-radius: 7px;
        background-image: linear-gradient(90deg, #f00 0px, #e8e8e8 40px, #ddd 80px);
        background-size: 600px;
        -webkit-animation: shine-lines 0.9s infinite linear;
                animation: shine-lines 0.9s infinite linear; }

    .post .avatar + .line {
        margin-top: 11px;
        width: 100px; }

    .post .line ~ .line {
        background-color: #ddd; }

    @-webkit-keyframes shine-lines {
      0% {
        background-position: -100px; }
      40%, 100% {
        background-position: 140px; } }

    @keyframes shine-lines {
      0% {
        background-position: -100px; }
      40%, 100% {
        background-position: 140px; } }

    @-webkit-keyframes shine-avatar {
      0% {
        background-position: -32px; }
      40%, 100% {
        background-position: 208px; } }

    @keyframes shine-avatar {
      0% {
        background-position: -32px; }
      40%, 100% {
        background-position: 208px; } }

        a {
          text-decoration: none;
          display: block;
          margin: 15px auto;
          border: 2px solid #96ceb4;
          border-radius: 10px;
          width: 80%;
          color: black;
          padding: 10px 0;
        }
      `
  ],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent {
  _links: any[] = [];

  @Input()
  set links(value: string | any[]) {
    if (localStorage.getItem('multi-app')) {
      this.getFromStorage();
      return;
    }

    if (typeof value === 'string') {
      this._links = JSON.parse(value);
    } else {
      this._links = value;
    }
  }

  public getFromStorage(): void {
    let storedData: any = localStorage.getItem('multi-app');
    if (!storedData) {
      return;
    }
    storedData = JSON.parse(storedData);
    this._links = storedData.data.menu;
  }
}
