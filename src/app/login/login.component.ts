import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, RequiredValidator, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { firstName, matchingPasswordsValidator } from '../directives/custom-reactive-validation.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegister = false
  login: FormGroup
  activeTab: string = 'login';
  register: string = 'blue'
  
  surname:FormControl=new FormControl('',Validators.minLength(6))

  constructor(private fb: FormBuilder) {
    console.log()
    this.login = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-z/sA-Z ]+$')]],
      username: ['', [Validators.required, firstName(), Validators.pattern('[a-zA-Z0-9]+$'), Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator })
    
  }
  // Method to add form control dynamically
  addFormControl() {
    this.login.addControl('dynamic add', new FormControl('', Validators.required));
  }

  // Method to remove form control dynamically
  removeFormControl() {
    this.login.removeControl('dynamic add');
  }


  passwordMatchValidator(login: FormGroup) {
    const password = login.get('password')!.value;
    const confirmPassword = login.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  signIn() { }
  openRegister() {
    this.showRegister = true
    this.activeTab = 'register'
  }
  openLogin() {
    this.showRegister = false
    this.activeTab = 'login'
  }



  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.showRegister = false
  }
  inActiveTab(reg: string) {
    this.activeTab = reg
    this.showRegister = true
  }
  submit(form: FormGroup) {
    console.log(form)
      // Getter method for easy access to form controls
  // get formControls() {
    return this.login.controls;
  // }
    // console.log(form.value.pass)
  }

}
