import { Directive, Input } from '@angular/core';
import { Validator,NG_VALIDATORS,AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCustomValidation]',
  providers:[{provide:NG_VALIDATORS,useExisting:CustomValidationDirective,multi:true}]
})
export class CustomValidationDirective implements Validator {
  @Input('appCustomValidation') nameNotAllowed!:string
  constructor(){

}
validate(control: AbstractControl): ValidationErrors | null {
  if (control.value === this.nameNotAllowed) {
    return { nameNotAllowed: { value: control.value } };
    
  }
  return null;
}

}
