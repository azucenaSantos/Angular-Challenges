import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { CanDeactivateWithDialog } from '../guards/can-deactivate-dialog.guard';

@Component({
  imports: [MatButtonModule],
  selector: 'app-simple-action',
  templateUrl: './simple-action.component.html',
})
export class SimpleActionComponent implements CanDeactivateWithDialog {
  //readonly simpleDialogRef = inject(MatDialog);

  private simpleDialogRef: MatDialogRef<unknown> | null = null;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    this.simpleDialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    // cuando se cierre, limpiamos la referencia
    this.simpleDialogRef.afterClosed().subscribe(() => {
      this.simpleDialogRef = null;
    });
  }

  canDeactivateWithDialog(): boolean {
    // Si hay un diálogo simple abierto:
    if (this.simpleDialogRef) {
      // lo cerramos
      this.simpleDialogRef.close();

      // y devolvemos false para impedir la navegación
      // => nos quedamos en /simple-action
      return false;
    }

    // Si no hay diálogo abierto, dejamos que Angular navegue normal
    return true;
  }
}
