import { ChangeDetectorRef, Component, ElementRef, Inject, Optional } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT, MatOptgroup, MatOption, MatOptionParentComponent } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'multi-option',
  templateUrl: './multi-option.component.html'
})
export class MultiOptionComponent extends MatOption {
  parent: MatSelect;

  get noOptions(): boolean {
    return this.parent && Array.isArray(this.parent.selected) ? !this.parent.selected.length : false;
  }

  get abstractControl(): AbstractControl {
    return this.parent.ngControl.control;
  }

  constructor(elementRef: ElementRef<HTMLElement>,
              changeDetectorRef: ChangeDetectorRef,
              @Optional() @Inject(MAT_OPTION_PARENT_COMPONENT) parent: MatOptionParentComponent,
              @Optional() group: MatOptgroup) {
    super(elementRef, changeDetectorRef, parent, group);
    this.parent = parent as MatSelect;
    elementRef.nativeElement.classList.add('system-option', this.parent.multiple ? 'bot' : 'none');
  }

  selectUnselect(): void {
    this.noOptions ? this.selectAll() : this.unselectAll();
  }

  selectAll(): void {
    const options: MatOption[] = this.parent.options['_results'];
    this.abstractControl.setValue(options.map(option => option.value));
  }

  unselectAll(): void {
    this.abstractControl.setValue([]);
  }
}
