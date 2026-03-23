import { Component, Inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { TIMER_TOKEN } from './timer-token';

@Component({
  selector: 'timer',
  template: `
    Timer running {{ timer() }}
  `,
})
export class TimerComponent {
  timer: any;

  constructor(@Inject(TIMER_TOKEN) private timerDelay: number) {
    //Especificamos el valor del injectionToken del archivo timer-token.ts en los providers de cada ruta
    //configurada en el app.config.ts
    this.timer = toSignal(interval(this.timerDelay));
  }
}
