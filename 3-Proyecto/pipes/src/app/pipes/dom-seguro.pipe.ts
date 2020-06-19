import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, ...args: any[]): SafeResourceUrl {
    console.log(value);
    
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
