import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialog/confirm/confirm.component';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  imports: [MatButtonModule],
  selector: 'app-sensitive-action',
  templateUrl: './sensitive-action.component.html',
})
export class SensitiveActionComponent {
  readonly #dialog = inject(MatDialog);

  #sensitiveDialogRef: MatDialogRef<DialogComponent> | null = null;

  openDialog(): void {
    this.#sensitiveDialogRef = this.#dialog.open(DialogComponent, {
      width: '250px',
    });

    this.#sensitiveDialogRef.afterClosed().subscribe(() => {
      this.#sensitiveDialogRef = null;
    });
  }

  /**
   * Se ejecuta cuando el usuario intenta salir de /sensitive-action
   * (incluye botón Atrás).
   */
  canDeactivateWithDialog(): boolean | Promise<boolean> {
    // Si no hay diálogo sensible abierto, se puede navegar normal
    if (!this.#sensitiveDialogRef) {
      return true;
    }

    // Hay diálogo sensible abierto:
    // mostramos un diálogo de confirmación y decidimos según su respuesta.
    const confirmRef = this.#dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: '¿Salir?',
        message: 'Hay una acción sensible en curso. ¿Seguro que quieres salir?',
      },
    });

    // Devolvemos una Promise<boolean> que se resuelve cuando se cierre la confirmación
    return confirmRef
      .afterClosed()
      .toPromise()
      .then((userConfirmed: boolean) => {
        if (userConfirmed) {
          // Usuario confirmó que quiere salir:
          // (aquí decides la política. Ejemplos:)

          // 1) Permitir navegar y cerrar el diálogo sensible:
          this.#sensitiveDialogRef?.close();
          this.#sensitiveDialogRef = null;
          return true; // Angular navega

          // Si en el reto te piden STAY siempre, entonces sería:
          // return false;
        }

        // Usuario canceló → cerramos SOLO la confirmación,
        // seguimos en /sensitive-action y mantenemos el diálogo sensible abierto.
        return false; // no navegamos
      });
  }
}
