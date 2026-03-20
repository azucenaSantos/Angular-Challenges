// import { Component, signal } from '@angular/core';
import { Component } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';

@Component({
  selector: 'app-root',
  template: `
    <p>
      Cargar solo aquellos necesarios y cargar el de top cuando se haga click en
      el boton solo
    </p>
    <div class="h-screen bg-gray-500">
      @defer (on interaction(trigger); loader loadTop) {
        <!-- <app-top /> -->
        <ng-container *ngComponentOutlet="topComponent"></ng-container>
      } @placeholder {
        <!--componente base-->
        <app-placeholder />
        <button
          #trigger
          class="rounded-sm border border-blue-500 bg-blue-300 p-2">
          Mostrar Top
        </button>
      } @loading {
        <!-- Opcional: lo que se ve mientras se está descargando el chunk -->
        <div class="p-4 text-white">Cargando componente pesado...</div>
      }
    </div>
  `,
  // standalone: false,
  imports: [PlaceholderComponent],
})
export class AppComponent {
  topComponent: any = null;

  // Esta función se usará como "loader" en el @defer
  async loadTop() {
    const { TopComponent } = await import('./top.component');
    this.topComponent = TopComponent;
  }
}
