import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminPage } from './admin-page';
import { App } from './app';
import { Dashboard } from './dashboard';
import { ProfilePage } from './profile-page';
import { UserPage } from './user-page';
import { UserProfileService } from './user-profile.service';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', pathMatch: 'full', component: Dashboard },
      { path: 'profile', component: ProfilePage },
      { path: 'admin', component: AdminPage },
      { path: 'user', component: UserPage },
      {
        path: 'account',
        pathMatch: 'full',
        redirectTo: () => inject(UserProfileService).getProfile(),
        //ESTO QUIERE DECIR, si alguien entra en 'account' redirgir a la
        //ruta correspondiente al getProfile (será /admin o /user)
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
