import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: EventTarget) {
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
