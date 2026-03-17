import { Component, Pipe, PipeTransform } from '@angular/core';
import { ExternalPipeComutationPipe } from './external-pipe-comutation.pipe';
import { HeavyComutationListClass } from './heavyComutation.pipe';

@Pipe({
  name: 'heavyComputation',
  pure: true,
})
export class HeavyComputationClass implements PipeTransform {
  transform(value: string, index: number): string {
    //imitar funcion
    return `${value} - ${index}`;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeavyComputationClass,
    ExternalPipeComutationPipe,
    HeavyComutationListClass,
  ], //ESTO LO PONEMOS AQUI O EN SU DEFECTO EN EL APP.MODULE SI LO TUVIESEMOS
  template: `
    <p>Sin pipe</p>
    @for (person of persons; track person) {
      {{ heavyComputation(person, $index) }}
    }
    <!--Con un pipe personalizado-->
    <p>Con pipe</p>
    @for (person of persons; track person) {
      {{ person | heavyComputation: $index }}
    }
    <p>Con pipe externo (fichero externo uso normal)</p>
    @for (person of persons; track person) {
      {{ person | externalPipeComutation: $index }}
    }
    <p>Pipe diferente pasando la lista entera</p>
    {{ persons | heavyComutationList }}
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];

  heavyComputation(name: string, index: number) {
    //very heavy computation
    return `${name} - ${index}`;
  }

  /*Para cumplir el reto deberiamos quitar la funcion y solo dejar
  el pipe pero dejo todo para que se note la diferencia entre usar un pipe y usar una funcion*/
}
