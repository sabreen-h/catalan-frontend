import { Component, inject } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatChipInputEvent, MatChipEditedEvent } from '@angular/material/chips';
@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;

  announcer = inject(LiveAnnouncer);

  editProfileForm: FormGroup;

  name: string | undefined;
  ID: number | undefined;
  email: string | undefined;
  password: string | undefined;
  gender: string | undefined;
  birth_date: string | undefined;
  admin_id:number | undefined;
  specialization_id:number | undefined
  phones:string[] =[]

  genderOptions: string[] = ['Male', ' Female']; 

  constructor(private formBuilder: FormBuilder){
    this.editProfileForm=this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      phones:[''],
     
    })
  }


  // Add method to add phones number to the list
    // Add method to add phones number to the list
add(event: MatChipInputEvent): void {
  const input = event.input;
  const value = event.value;

  // Add phones number if input is not empty and is valid
  if ((value || '').trim()) {
    this.phones.push(value.trim()); // Push only the value
    this.editProfileForm.get('phones')?.setValue(this.phones);
  }

  // Reset the input value
  if (input) {
    input.value = '';
  }
}


  // Remove method to remove phones number from the list
  remove(phone: string): void {
    const index = this.phones.indexOf(phone);
  
    if (index >= 0) {
      this.phones.splice(index, 1);
      this.editProfileForm.get('phones')?.setValue(this.phones);
    }
  }

  edit(phone: string, event: MatChipEditedEvent): void {
    const newphone = event.chip.value.trim();
    const index = this.phones .indexOf(phone);
  
    if (index !== -1) {
      this.phones[index] = newphone;
      this.editProfileForm.get('phones')?.setValue(this.phones);
    }
  }
  
}
