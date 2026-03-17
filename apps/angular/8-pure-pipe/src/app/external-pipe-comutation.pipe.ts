import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'externalPipeComutation',
})
export class ExternalPipeComutationPipe implements PipeTransform {
  transform(value: string, index: number): any {
    return `${value} - ${index}`;
  }
}
