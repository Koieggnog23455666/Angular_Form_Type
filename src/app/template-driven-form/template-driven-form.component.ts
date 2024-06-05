import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  @ViewChild('form') form=NgModelGroup

  onSubmit(form:NgForm){
    console.log(form)
    
  }
}
