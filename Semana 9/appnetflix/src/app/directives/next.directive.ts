import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click')
  nextFunction() {
   let element = this.elementRef.nativeElement.parentElement.parentElement.children[0];
   console.log(this.elementRef.nativeElement.parentElement.parentElement);
   let card = element.getElementsByClassName('card');
   element.append(card[0]);
 }

}
