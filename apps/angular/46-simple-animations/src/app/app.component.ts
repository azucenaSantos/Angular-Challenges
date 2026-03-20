import { Component } from '@angular/core';
import { fadeInAnimation, staggerAnimation } from './app.animations';

@Component({
  animations: [fadeInAnimation, staggerAnimation], //Aqui añadimos las animaciones que creamos en el app.animations.ts
  imports: [],
  selector: 'app-root',
  styles: `
    section {
      @apply flex flex-1 flex-col gap-5;
    }

    .list-item {
      @apply flex flex-row border-b px-5 pb-2;

      span {
        @apply flex-1;
      }
    }
  `,
  template: `
    <!--ANGULAR RECOMIENDA USAR animate.enter="clase-estilos-css" PARA NO DEPENDER DEL USO DE LAS ANIMACIONES A PARTE-->
    <div class="mx-20 my-40 flex gap-5">
      <section @fadeInAnimation>
        <!--llamamos a la animacion en el bloque que queramos con un '@'-->
        <div>
          <h3>2008</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h3>2010</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>

        <div>
          <h4>2012</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            mollitia sequi accusantium, distinctio similique laudantium eveniet
            quidem sit placeat possimus tempore dolorum inventore corporis atque
            quae ad, nobis explicabo delectus.
          </p>
        </div>
      </section>
      <section @staggerAnimation>
        <!--Trak; sobre que propiedad de cada item diferenciamos cada uno de ello en la lista-->
        @for (item of list; track item.key) {
          <div class="list-item">
            <span>{{ item.key }}</span>
            <span>{{ item.value }}</span>
          </div>
        }
      </section>
    </div>
  `,
})
export class AppComponent {
  readonly list: { key: string; value: string }[] = [
    { key: 'Name', value: 'Samuel' },
    { key: 'Age', value: '28' },
    { key: 'Birthdate', value: 'City' },
    { key: 'Language', value: 'English' },
    { key: 'Like Pizza', value: 'Hell yeah' },
  ];
}
