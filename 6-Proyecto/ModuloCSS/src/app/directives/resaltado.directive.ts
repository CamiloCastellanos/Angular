import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input("appResaltado") color: string;

  constructor(private el: ElementRef) {
    console.log("Directiva Resaltado Llamada.");
  }

  @HostListener('mouseenter') mouseEntro() {
    this.resltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resltar('');

  }

  private resltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
