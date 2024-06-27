import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-specialization-dialog',
  templateUrl: './add-specialization-dialog.component.html',
  styleUrl: './add-specialization-dialog.component.css'
})
export class AddSpecializationDialogComponent {

  addSpecializationForm: FormGroup;

  id: number |undefined;
  name:string| undefined;
  description:string| undefined;

  constructor(private formBuilder: FormBuilder){
    this.addSpecializationForm=this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    })
  }


}
