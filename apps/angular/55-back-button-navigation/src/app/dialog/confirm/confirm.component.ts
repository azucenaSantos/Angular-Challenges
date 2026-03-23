import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data?.title || 'Confirmar' }}</h2>
    <div mat-dialog-content>
      {{ data?.message || '¿Estás seguro?' }}
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-raised-button color="primary" (click)="onConfirm()">
        Aceptar
      </button>
    </div>
  `,
})
export class ConfirmDialogComponent {
  private readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA, { optional: true }) as {
    title?: string;
    message?: string;
  } | null;

  onConfirm(): void {
    this.dialogRef.close(true); // usuario confirmó
  }

  onCancel(): void {
    this.dialogRef.close(false); // usuario canceló
  }
}
