import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Role } from '../user.model';
import { UserStore } from '../user.store';

/*
Directiva:
Atributos especiales que modifican la estructura del DOM 
(Document Object Model) al agregar, eliminar o 
reemplazar elementos HTML basados en condiciones
*/

@Directive({
  selector: '[hasRole]', //Forma en la que llamaremos a la directiva en cada lugar que la necesitemos
  standalone: true,
})
export class HasRoleDirective {
  //Directiva con la que controlaremos qué mensajes mostrar en el information.component
  //dependiendo del boton sobre el que hicimos click

  //Lista de roles para comprobar
  private rolesToCheck: Role[] = [];
  private sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly userStore: UserStore,
  ) {
    this.sub = this.userStore.user$.subscribe((user) =>
      this.updateView(user?.roles ?? [], user?.isAdmin ?? false),
    );
  }

  //El hasRol es lo que llamaremos para comprobar condiciones sobre el rol que pasemos
  @Input() set hasRole(roleOrRoles: Role | Role[]) {
    //Almacenamos el rol que pasemos (los del click en el boton)
    this.rolesToCheck = Array.isArray(roleOrRoles)
      ? roleOrRoles
      : [roleOrRoles];

    //Almacenamos el user seleccionado (que es el que se hace add en el login al hacer click en los botones)
    this.userStore.user$.subscribe((user) => {
      this.updateView(user?.roles ?? [], user?.isAdmin ?? false);
      //Pasamos a la funcion los roles y si es admin o no
      //Ya que un admin puede ver todo siempre
    });
  }

  private updateView(currentRoles: Role[], isAdmin: boolean) {
    const canSee =
      isAdmin || this.rolesToCheck.some((r) => currentRoles.includes(r));

    this.viewContainer.clear();
    if (canSee) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
