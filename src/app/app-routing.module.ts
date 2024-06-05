import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './login/login.component';
import { CreateTeamsComponent } from './create-teams/create-teams.component';


const routes: Routes = [
  {path:'form',component:TemplateDrivenFormComponent},
  {path:'template',component:TemplateDrivenFormComponent},
  {path:'reactive',component:ReactiveFormComponent},
  {path:'registration',component:LoginComponent},
  {path:'create',component:CreateTeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
