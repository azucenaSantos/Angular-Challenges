import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TIMER_TOKEN } from './timer-token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'video' },
      {
        path: 'video',
        loadComponent: () => import('./video.component'),
        providers: [{ provide: TIMER_TOKEN, useValue: 1000 }],
      },
      {
        path: 'phone',
        loadComponent: () => import('./phone.component'),
        providers: [{ provide: TIMER_TOKEN, useValue: 2000 }],
      },
    ]),
  ],
};

//    { provide: 'TIMER_TOKEN', useValue: '2000' },
