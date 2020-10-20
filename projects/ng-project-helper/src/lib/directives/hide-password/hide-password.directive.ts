import { Directive, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[hidePassword]'
})
export class HidePasswordDirective {
  @Input() hidePassword: HTMLInputElement;

  @HostListener('click')
  onClick(): void {
    this.hidePassword.type = this.getInputType();
  }

  getInputType(): string {
    return this.hidePassword.type === 'text' ? 'password' : 'text';
  }
}
