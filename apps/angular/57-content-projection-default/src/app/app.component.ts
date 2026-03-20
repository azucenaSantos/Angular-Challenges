import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  schemas: [NO_ERRORS_SCHEMA],
  template: `
    <!-- <app-card title="Titre 1" message="Message1" />
    <app-card title="Titre 2" /> -->
    <app-card>
      <card-title>Title 1</card-title>
      <card-message>Message 1</card-message>
    </app-card>
    <app-card>
      <card-title>Title 2</card-title>
    </app-card>
  `,
  host: {
    class: 'p-4 block flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
