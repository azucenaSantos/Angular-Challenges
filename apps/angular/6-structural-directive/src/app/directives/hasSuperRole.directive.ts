import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserStore } from '../user.store';

/*
Directiva:
Atributos especiales que modifican la estructura del DOM 
(Document Object Model) al agregar, eliminar o 
reemplazar elementos HTML basados en condiciones
*/

@Directive({
  selector: '[hasSuperRole]', //Forma en la que llamaremos a la directiva en cada lugar que la necesitemos
  standalone: true,
})
export class HasSuperRoleDirective {
  //Directiva con la que controlaremos qué mensajes mostrar en el information.component
  //dependiendo del boton sobre el que hicimos click

  //Lista de roles para comprobar
  private enabled = false;
  private sub: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private readonly userStore: UserStore,
  ) {
    this.sub = this.userStore.user$.subscribe((user) => {
      this.updateView(user);
    });
  }

  //El hasRol es lo que llamaremos para comprobar condiciones sobre el rol que pasemos
  @Input() set hasSuperRole(contidtion: true) {
    this.enabled = contidtion;
    //fuerza un re-render usando el último valor del user
    this.userStore.user$.subscribe((user) => {
      this.updateView(user);
    });
  }

  private updateView(user: any) {
    this.viewContainer.clear();
    if (!this.enabled) return;

    const isSuperAdmin = user?.isAdmin === true;
    if (isSuperAdmin) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
