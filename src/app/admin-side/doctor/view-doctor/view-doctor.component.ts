import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../specializations/confirm-delete-dialog/confirm-delete-dialog.component';
import { EditDoctorDialogComponent } from '../edit-doctor-dialog/edit-doctor-dialog.component';
import { AddDoctorDialogComponent } from '../add-doctor-dialog/add-doctor-dialog.component';

export interface UserData {
  name: string;
  ID: number;
  email: string;
  password: string;
  gender: string;
  birth_date: string;
  admin_id:number;
  specialization_id:number
  phone:string[] 

}

const ELEMENT_DATA: UserData[] = [
  {
    name: 'John Doe',
    ID: 1,
    email: 'john.doe@example.com',
    password: 'password123',
    gender: 'Male',
    birth_date: '1990-01-01',
    admin_id: 101,
    specialization_id: 201,
    phone: ['123-456-7890', '098-765-4321']
  },
  {
    name: 'Jane Smith',
    ID: 2,
    email: 'jane.smith@example.com',
    password: 'password123',
    gender: 'Female',
    birth_date: '1985-05-15',
    admin_id: 102,
    specialization_id: 202,
    phone: ['234-567-8901', '567-890-1234']
  },
  {
    name: 'Joe Bloggs',
    ID: 3,
    email: 'joe.bloggs@example.com',
    password: 'password123',
    gender: 'Male',
    birth_date: '1978-12-12',
    admin_id: 103,
    specialization_id: 203,
    phone: ['345-678-9012', '678-901-2345']
  },
  // Add more data as needed...
];


@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrl: './view-doctor.component.css'
})
export class ViewDoctorComponent {

  displayedColumns: string[] = ['ID','name',  'email','password','gender','birth_date','admin_id','specialization_id','phone' , "action"];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(public dialog: MatDialog ) { }
 
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addDialog() {
    const dialogRef = this.dialog.open(AddDoctorDialogComponent, { width:'50%'});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

       // this. getMethod()
        
       
      }
    });
  }

  editDialog(data: any) {
    const dialogRef = this.dialog.open( EditDoctorDialogComponent,  {
      data, width:'50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        //this. getMethod()
       
      }
    });
  }

  openConfirmDialog(id:number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { message: '   Are you sure you want to delete this doctor   ' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       // this.deleteVehicle(vehicle_PlateNumber);
      }
    });
  }


}
