import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  @HostBinding("class.open") isOpen: Boolean = false;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}

  @HostListener("click")
  toggleOpen(eventData: Event) {
    //alert(this.eleRef.nativeElement.getAttribute('class'));
    /*if(this.eleRef.nativeElement.getAttribute('class') === "btn-group") {
         this.renderer.addClass(this.eleRef.nativeElement, 'open');
     } else {
         this.renderer.removeClass(this.eleRef.nativeElement, 'open');
     }  */
    this.isOpen = !this.isOpen;
  }
}
