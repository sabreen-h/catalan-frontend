import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(public dialog: MatDialog ) { }

  editDialog() {
    const dialogRef = this.dialog.open( EditProfileDialogComponent,  {
      width:'40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        //this. getMethod()
       
      }
    });
  }

}
