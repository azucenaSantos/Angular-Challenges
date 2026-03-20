// import { Component, signal } from '@angular/core';
import { Component } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';
import { TopComponent } from './top.component';

@Component({
  selector: 'app-root',
  template: `
    <!-- <p>Cargar todos los componentes aunque no se esté viendo</p>
    <div class="h-screen bg-gray-500">
      @if (topLoaded()) {
        <app-top />
      } @else {
        <app-placeholder />
        <button
          class="rounded-sm border border-blue-500 bg-blue-300 p-2"
          (click)="topLoaded.set(true)">
          Load Top
        </button>
      }
    </div> -->

    <p>
      Cargar solo aquellos necesarios y cargar el de top cuando se haga click en
      el boton solo
    </p>
    <div class="h-screen bg-gray-500">
      @defer (on interaction(trigger)) {
        <!--DETERMINAMOS AQUI SOBRE QUE ES LA INTERACCION, el boton con #trigger-->
        <!--heavy component-> el que se muestra o no independientemente de una condicion(top component)-->
        <app-top />
      } @placeholder {
        <!--componente base-->
        <app-placeholder />
        <button
          #trigger
          class="rounded-sm border border-blue-500 bg-blue-300 p-2">
          Mostrar Top
        </button>
      }
    </div>
  `,
  // standalone: false,
  imports: [PlaceholderComponent, TopComponent], //REALMENTE SE ESTAN CARGANDO TODOS LOS COMPONENTES
  //NO CONSEGUIMOS QUE SOLAMENTE EL TOP APAREZCA SI SE HACE CLICK, asi que no estamos implementando un
  //Lazy load component correcto

  //realmente con esta ejecucion estamos como retrasando un poco la aparicion del top componente
  //pero no la quitamos realmente (se retrasa su renderizado)
})
export class AppComponent {
  //topLoaded = signal(false); -> ya no usamos un signal para mostrar o no el top.component
}
