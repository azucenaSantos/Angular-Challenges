/* eslint-disable @angular-eslint/component-selector */
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-button',
  imports: [RouterLink],
  template: `
    <a [routerLink]="href()" [fragment]="ancla()">
      <ng-content />
    </a>
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
})
export class NavButtonComponent {
  //El nav puede que necesite un href o un ancla, necesitamos 2 inputs (para routerLink y para fragment)
  href = input('');
  ancla = input('');
}
