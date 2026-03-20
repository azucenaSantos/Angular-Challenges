/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { TextComponent } from './text.component';

export type StaticTextType = 'normal' | 'warning' | 'error';

@Component({
  selector: 'static-text',
  imports: [TextComponent],
  styles: [
    `
      //host-context-> Aplica estilos si un ancestro (cualquier elemento superior a donde se aplica)
      //tiene esa clase (es decir el page.component es el que tiene esa clase y
      //desde aqui modificamos el text.component que está dentro de static-text.component)
      //* por lo tanto si ponemos estos estilos dentro de text (acomodando lo suficiente, tambien funcionarian)
      :host-context(.error) {
        text {
          color: red;
          font-size: 30px;
        }
      }
    `,
    `
      :host-context(.warning) {
        text {
          color: orange;
          font-size: 25px;
        }
      }
    `,
    `
      text {
        font-size: 10px;
        color: black;
      }
    `,
  ],
  template: `
    <text>This is a static text</text>
  `,
})
export class TextStaticComponent {}
