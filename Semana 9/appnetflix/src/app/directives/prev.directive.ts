import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  prevFunction() {
    let element = this.elementRef.nativeElement.parentElement.parentElement.children[0];
    let card = element.getElementsByClassName('card');
    element.prepend(card[card.length - 1]);
  }

}
