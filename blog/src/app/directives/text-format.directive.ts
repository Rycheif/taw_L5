import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[textFormat]'
})
export class TextFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    console.log('ddd')
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
