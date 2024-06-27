import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-warking-schedule-dialog',
  templateUrl: './update-warking-schedule-dialog.component.html',
  styleUrls: ['./update-warking-schedule-dialog.component.css']
})
export class UpdateWarkingScheduleDialogComponent {

  editWorkingSchedule: FormGroup;

  work_id: number | undefined;
  day: string | undefined;
  start_time: string | undefined;
  end_time: string | undefined;
  doctor_id: number | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.editWorkingSchedule = this.formBuilder.group({
      work_id: ['', Validators.required],
      day: ['', Validators.required],
      start_time: ['', Validators.required],
      end_time: ['', Validators.required],
      doctor_id: ['', Validators.required],
    });
  }
}
