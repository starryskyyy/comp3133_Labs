import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("blur") onBlur() {
    let value: string = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = value.toUpperCase();
  }
}

