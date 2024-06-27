import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-spectialization-dialog',
  templateUrl: './edit-spectialization-dialog.component.html',
  styleUrl: './edit-spectialization-dialog.component.css'
})
export class EditSpectializationDialogComponent {

  editSpecializationForm: FormGroup;

  id: number |undefined;
  name:string| undefined;
  description:string| undefined;

  constructor(private formBuilder: FormBuilder){
    this.editSpecializationForm=this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    })
  }


}
