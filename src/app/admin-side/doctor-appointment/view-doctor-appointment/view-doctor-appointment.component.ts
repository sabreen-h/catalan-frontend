import { Component,  ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../specializations/confirm-delete-dialog/confirm-delete-dialog.component';


export interface UserData {
  appointment_id: number;
  day: string;
  month: string;
  year: string;
  time: string;
  status:string;
  doctor_id:number;
  patient_id:number
}

const ELEMENT_DATA: UserData[] = [
  {
    appointment_id: 1,
    day: '01',
    month: 'January',
    year: '2023',
    time: '10:00 AM',
    status: 'Scheduled',
    doctor_id: 101,
    patient_id: 201,
  },
  {
    appointment_id: 2,
    day: '15',
    month: 'May',
    year: '2023',
    time: '02:00 PM',
    status: 'Completed',
    doctor_id: 102,
    patient_id: 202,
  },
  {
    appointment_id: 3,
    day: '12',
    month: 'December',
    year: '2023',
    time: '11:00 AM',
    status: 'Cancelled',
    doctor_id: 103,
    patient_id: 203,
  },
  // Add more data as needed...
];

@Component({
  selector: 'app-view-doctor-appointment',
  templateUrl: './view-doctor-appointment.component.html',
  styleUrl: './view-doctor-appointment.component.css'
})
export class ViewDoctorAppointmentComponent {

  
  displayedColumns: string[] = ['appointment_id', 'day', 'month', 'year', 'time', 'status', 'doctor_id', 'patient_id', 'action'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(public dialog: MatDialog) { }

  

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openConfirmDialog(id:number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: { message: '   Are you sure you want to delete this appointment   ' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       // this.deleteVehicle(vehicle_PlateNumber);
      }
    });
  }


}
