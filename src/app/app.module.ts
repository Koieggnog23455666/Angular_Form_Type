import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule,} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


import { LoginComponent } from './login/login.component';
import { CustomValidationDirective } from './directives/custom-validation.directive';
import { CommonModule } from '@angular/common';
import { firstName } from './directives/custom-reactive-validation.directive';
import { CreateTeamsComponent } from './create-teams/create-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    NavbarComponent,
    ReactiveFormComponent,
    LoginComponent,
    CustomValidationDirective,
    CreateTeamsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,FormsModule,
    MatToolbarModule,MatButtonModule,ReactiveFormsModule,CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
