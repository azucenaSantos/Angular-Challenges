import { CanMatchGuard } from './guards/canMatch.guard';

export const APP_ROUTES = [
  {
    path: '',
    loadComponent: () =>
      import('./login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'enter',
    loadComponent: () =>
      import('./dashboard/admin.component').then(
        (m) => m.AdminDashboardComponent,
      ),
    canMatch: [CanMatchGuard],
    //Usamos el canMatch porque es el can que usamos dentro del guard!!
  },
];

/*
CanActivate -> se ejecuta despues de que la URL se haya resuelto (decide si puede activar/entrar a una ruta)

CanMatch -> se ejecuta antes de que el router decida qué ruta coincide (decide si puede coincidir la ruta con la URL)
*/
