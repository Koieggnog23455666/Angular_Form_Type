import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function firstName():ValidatorFn{
  return(control:AbstractControl):{[key:string]:any}|null=>{
if(control.value.trim()==="admin"){
  return {'nameNotAllowed':true}
}
return null         
  }
}
export const matchingPasswordsValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');


  if (!password || !confirmPassword) {
    return null;
  }

  return password.value !== confirmPassword.value ? { passwordsDoNotMatch: true } : null;
  
};
