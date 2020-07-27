import { Directive, Input, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
@Directive({
  selector: '[appCheckDuplicate]',
  providers: [{provide: NG_VALIDATORS, useExisting: CheckDuplicateDirective, multi: true}]
})
export class CheckDuplicateDirective implements Validator {
  @Input() list
  private validationFunction = Validators.nullValidator;
  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['list'];
    if (change) {
      this.validationFunction = checkDuplicateValue(this.list);
    } else {
      this.validationFunction = Validators.nullValidator;
    }
  }
  validate(control: AbstractControl): ValidationErrors | any {
    return this.validationFunction(control);
  }
}
export function checkDuplicateValue(list):ValidatorFn {
  return (control: AbstractControl):{[key: string]: boolean} | null => {
    let check = null
    list.forEach((item, index)=>{
      if(item.ListTitle===control.value){
        check= {
            checkDuplicateValue: {valid: false}
         };
      }
    console.log(item)
    })
    return check
}
}