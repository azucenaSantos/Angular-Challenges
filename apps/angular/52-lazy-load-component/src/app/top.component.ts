import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  template: `
    I am a very heavy, expensive component that should be lazy loaded.
  `,
  styles: `
    :host {
      display: grid;
      padding: 20px;
      background-color: #f0f0f0;
      height: 50%;
    }
  `,
  standalone: true, //Necesario para poder llamarlo desde app.component
})
export class TopComponent {}
