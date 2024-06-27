import { Component,  ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { UpdateWarkingScheduleDialogComponent } from '../update-warking-schedule-dialog/update-warking-schedule-dialog.component';

export interface UserData {
  work_id: number;
  day: string;
  start_time: string;
  end_time: string;
  doctor_id:number;
  
}

export interface UserData {
  work_id: number;
  day: string;
  start_time: string;
  end_time: string;
  doctor_id: number;
}

const ELEMENT_DATA: UserData[] = [
  {
    work_id: 1,
    day: 'Monday',
    start_time: '09:00 AM',
    end_time: '05:00 PM',
    doctor_id: 101,
  },
  {
    work_id: 2,
    day: 'Tuesday',
    start_time: '10:00 AM',
    end_time: '06:00 PM',
    doctor_id: 102,
  },
  {
    work_id: 3,
    day: 'Wednesday',
    start_time: '08:00 AM',
    end_time: '04:00 PM',
    doctor_id: 103,
  },
  // Add more data as needed...
];

@Component({
  selector: 'app-view-working-schedule',
  templateUrl: './view-working-schedule.component.html',
  styleUrl: './view-working-schedule.component.css'
})
export class ViewWorkingScheduleComponent {

  displayedColumns: string[] = ['work_id', 'day', 'start_time', 'end_time', 'doctor_id', 'action'];
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

  editDialog(data: any) {
    const dialogRef = this.dialog.open( UpdateWarkingScheduleDialogComponent,  {
      data, width:'30%'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

        //this. getMethod()
       
      }
    });
  }



}
