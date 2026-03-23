import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    @if (small()) {
      <!-- <ng-content select="[title]" />
      <ng-content select="[message]" /> -->
      <ng-container [ngTemplateOutlet]="titleTmpl" />
      <ng-container [ngTemplateOutlet]="bodyTmpl" />
    } @else {
      <!--PROBLEMA DE LO DE ANTES:
      Si es false el input de small, no se llega a renderizar los ng-content, pero los ng-container
      como los definimos fuera del else si se están renderizando (movemos la proyeccion)-->
      <div class="p-4">
        <div class="text-2xl">
          <!-- <ng-content select="[title]" /> -->
          <ng-container [ngTemplateOutlet]="titleTmpl" />
        </div>
        <!-- <ng-content select="[message]" /> -->
        <ng-container [ngTemplateOutlet]="bodyTmpl" />
      </div>
    }

    <ng-template #titleTmpl>
      <ng-content select="[title]" />
    </ng-template>

    <ng-template #bodyTmpl>
      <ng-content select="[message]" />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
  imports: [NgTemplateOutlet],
})
export class CardComponent {
  small = input<boolean>(false);

  ngOnInit() {
    console.log('small', this.small());
  }
}
