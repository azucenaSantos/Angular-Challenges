import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heavyComutationList',
})
export class HeavyComutationListClass implements PipeTransform {
  transform(listPersons: any[]) {
    if (!listPersons) return [];
    return listPersons.map((person, index) => `${person} - ${index}`);
  }
}
