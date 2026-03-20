import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrapFn',
})
export class WrapFnPipe implements PipeTransform {
  transform(
    valor: any[],
    funcion: (...args: any[]) => any,
    ...args: any[]
  ): any {
    if (typeof funcion === 'function') {
      //valor es un ARRAY, sus elementos se pasan como ARGUMENTOS SEPARADOS
      return funcion(...valor, ...args);
    }
    return '';
  }
}
