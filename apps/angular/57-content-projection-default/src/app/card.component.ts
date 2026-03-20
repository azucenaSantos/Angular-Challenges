import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <!-- <div>{{ title() }}</div>
    @if (message()) {
      <div>{{ message() }}</div>
    } @else {
      <div>Aucun message</div>
    } -->
    <ng-content select="card-title"></ng-content>
    <ng-content select="card-message">Aucum mesagge</ng-content>
    <!--si no tenemos un card-message dentro del card.componente llamado,
    se va a mostrar el contenido que tengamos dentro del ng content (como si fuese un valor por defecto)-->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  // title = input.required<string>();
  // message = input<string | undefined>(undefined);
}
