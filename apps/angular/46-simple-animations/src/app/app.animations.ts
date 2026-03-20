import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
//Este será el archivo donde creemos las animaciones para luego usarlas en otro archivo

//Animación fadeIn + movimiento desde la izquierda a la derecha
export const fadeInAnimation = trigger('fadeInAnimation', [
  //Trigger-> define el NOMBRE de la animacion (lo que usaremos en la template)
  transition(':enter', [
    //Cuando el elemento es añadido al DOM (Transittion-> define cuando ocurre la animación; enter, en este caso, significa cuando el elemento "entre" al DOM)
    style({ opacity: 0, transform: 'translateX(-100px)' }), //Empieza con opacidad 0
    animate('400ms ease-out', style({ opacity: 1, transform: '*' })), //Incrementa gradualmente a intensidad 1
    //Style + animate -> define los estilos de comienzo y final durante la duracion de la animacion
  ]),
]);

//Animacion de movimiento "escalonado"
export const staggerAnimation = trigger('staggerAnimation', [
  transition('*=>*', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('100ms', [
        animate(
          '300ms 200ms',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
          ]),
        ),
      ]),
    ),
  ]),
]);

import { animation } from '@angular/animations';

//ANIMACIONES SIN DEPRECATED
// Fade-in + movimiento desde la izquierda
export const fadeIn = animation([
  style({ opacity: 0, transform: 'translateX(-100px)' }),
  animate('400ms ease-out', style({ opacity: 1, transform: '*' })),
]);

// "Stagger" manual usando delays distintos por item
// (la lógica de delay se hará en el template)
export const listItemEnter = animation(
  [
    style({ opacity: 0, transform: 'translateX(-20px)' }),
    animate(
      '{{ duration }} {{ delay }} ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateX(-20px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateX(10px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
      ]),
    ),
  ],
  {
    params: { duration: '300ms', delay: '0ms' },
  },
);
