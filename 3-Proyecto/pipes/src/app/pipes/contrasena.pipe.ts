import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, vision: boolean = false): any {
    return (vision) ? '*'.repeat(value.length) : value;
  }
}