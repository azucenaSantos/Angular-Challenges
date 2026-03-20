//import { AppModule } from './app/app.module'; -> lo hemos borrado porque los imports están dentro del app.component directamente

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; //->NUEVO ARCHIVO AÑADIDO

// platformBrowserDynamic()
//   .bootstrapModule(AppModule, {
//     applicationProviders: [provideZoneChangeDetection()],
//   })
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
