import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { AddSpecializationDialogComponent } from '../add-specialization-dialog/add-specialization-dialog.component';
import { EditSpectializationDialogComponent } from '../edit-spectialization-dialog/edit-spectialization-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';


export interface UserData {
  name: string;
  ID: number;
  description: string;
}

const ELEMENT_DATA: UserData[] = [
  { name: 'John Doe', ID: 25, description: '1234 Main St' },
  { name: 'Jane Smith', ID: 30, description: '5678 Elm St' },
  { name: 'Joe Bloggs', ID: 35, description: '9101 Oak St' },
  // Add more data as needed...
];



@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrl: './view-specialization.component.css'
})
export class ViewSpecializationComponent implements OnInit{
  displayedColumns: string[] = ['ID','name',  'description' , "action"];
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
    const dialogRef = this.dialog.open(AddSpecializationDialogComponent, { width:'30%'});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'success') {

       // this. getMethod()
        
       
      }
    });
  }

  editDialog(data: any) {
    const dialogRef = this.dialog.open( EditSpectializationDialogComponent,  {
      data, width:'30%'
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
      data: { message: '   Are you sure you want to delete this spectialization    ' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       // this.deleteVehicle(vehicle_PlateNumber);
      }
    });
  }


}
