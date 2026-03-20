import { Injectable } from '@angular/core';
import { CanMatch, Router } from '@angular/router';
import { UserStore } from '../user.store';

//Guard que nos va a permitir controlar el acceso a la ruta de dashboard
//dentro de routes

@Injectable({
  providedIn: 'root',
})
export class CanMatchGuard implements CanMatch {
  constructor(
    private router: Router,
    private userStore: UserStore,
  ) {}

  canMatch(): boolean {
    const isAdmin = this.userStore.userInfo?.isAdmin;
    if (isAdmin) {
      return true;
    }

    //si no es admin, redirigimos a la raíz y bloqueamos el match
    this.router.navigateByUrl('/');
    return false;
  }
}
