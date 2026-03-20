/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'text',
  template: `
    <p>
      <ng-content />
    </p>
  `,
})
export class TextComponent {}
