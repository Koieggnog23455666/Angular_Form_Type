import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, NgModelGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-teams',
  templateUrl: './create-teams.component.html',
  styleUrl: './create-teams.component.css'
})
export class CreateTeamsComponent {
  

teamForm!: FormGroup;

  constructor() {}

  ngOnInit() {
this.teamForm=new FormGroup({
  teamName:new FormControl('',[Validators.required]),
  addPlayer:new FormArray([
    new FormControl('',[Validators.required])
  ])
})

  }
  addPlay(){
  (<FormArray>this.teamForm.get('addPlayer')).push(new FormControl('',[Validators.required]))
  }
  removePlayer(index: number) {
    (<FormArray>this.teamForm.get('addPlayer')).removeAt(index);
  }

}

