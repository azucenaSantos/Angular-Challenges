import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * Contrato que pueden implementar los componentes que
 * quieren controlar qué pasa cuando el usuario navega hacia atrás.
 */
export interface CanDeactivateWithDialog {
  /**
   * Devuelve:
   * - true  -> se permite la navegación (Angular puede ir a la ruta anterior)
   * - false -> se cancela la navegación (nos quedamos en la ruta actual)
   * - Observable/Promise<boolean> -> mismo significado pero asíncrono
   */
  canDeactivateWithDialog: () =>
    | boolean
    | Observable<boolean>
    | Promise<boolean>;
}

/**
 * Guard funcional CanDeactivate que delega la decisión
 * al componente (si implementa la interfaz CanDeactivateWithDialog).
 */
export const canDeactivateDialogGuard: CanDeactivateFn<
  CanDeactivateWithDialog
> = (component) => {
  // Si el componente tiene el método canDeactivateWithDialog, lo usamos
  if (component?.canDeactivateWithDialog) {
    return component.canDeactivateWithDialog();
  }

  // Si no implementa nada especial, se permite navegar sin restricciones
  return true;
};
