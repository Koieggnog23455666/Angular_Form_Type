import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationDirective } from '../directives/custom-validation.directive';
import { firstName } from '../directives/custom-reactive-validation.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  form!:FormGroup
  
  constructor(private fb:FormBuilder){
  
  }
  
 
  ngOnInit() {
    // this done with formBuilder 
    this.form=this.fb.group({
      email:['',[Validators.required, Validators.email,firstName()]],
      password:['',[Validators.required, Validators.minLength(6)]],
      address:['',[Validators.required]],
      zip:['',[Validators.pattern('[0-9]{6,7}'),Validators.required,Validators.maxLength(6)]],
    }
    
    
  )
  this.form.get('address')!.valueChanges.subscribe((value: any) => {
    console.log('Form value changed:', value);
  })
    // this done without form builder

    //  this.form = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email, firstName()]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(6)
    //   ]),
    //   address:new FormControl('',[Validators.required]),
    //   zip:new FormControl('',[Validators.pattern('[0-9]{0,6}'),Validators.required,Validators.maxLength(6)])
    // });
  }
 

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
 
}
