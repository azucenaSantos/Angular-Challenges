import { Component } from '@angular/core';
import { WrapFnPipe } from './wrapFn.pipe'; // Adjust the path as needed

@Component({
  selector: 'app-root',
  imports: [WrapFnPipe],
  template: `
    <p>Version sin Pipe</p>
    @for (person of persons; track person.name) {
      {{ showName(person.name, $index) }}
      {{ isAllowed(person.age, $first) }}
    }

    <p>Version con Pipe</p>
    @for (person of persons; track person.name) {
      {{ [person.name, $index] | wrapFn: showName }}
      {{ [person.age, $first] | wrapFn: isAllowed }}
    }
  `,
})
export class AppComponent {
  persons = [
    { name: 'Toto', age: 10 },
    { name: 'Jack', age: 15 },
    { name: 'John', age: 30 },
  ];

  showName(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }

  isAllowed(age: number, isFirst: boolean) {
    if (isFirst) {
      return 'always allowed';
    } else {
      return age > 25 ? 'allowed' : 'declined';
    }
  }
}
