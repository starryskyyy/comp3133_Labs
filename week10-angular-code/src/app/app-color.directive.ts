import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppColor]'
})
export class AppColorDirective {

  constructor(private eleRef: ElementRef) {
    //this.eleRef.nativeElement.style.color = 'blue'
    this.eleRef.nativeElement.innerHTML = 'Welcome to GBC!!!'
  }


}
