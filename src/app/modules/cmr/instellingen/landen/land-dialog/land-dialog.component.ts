import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Land, LandSettings } from '../landen.model';

@Component({
  selector: 'app-land-dialog',
  templateUrl: './land-dialog.component.html',
  styleUrls: ['./land-dialog.component.scss']
})
export class LandDialogComponent implements OnInit {
  public form:FormGroup;
  public passwordHide:boolean = true;
  public colors = [
    {value: 'gradient-purple', viewValue: 'Purple'},
    {value: 'gradient-indigo', viewValue: 'Indigo'},
    {value: 'gradient-teal', viewValue: 'Teal'},
    {value: 'gradient-blue', viewValue: 'Blue'},
    {value: 'gradient-orange', viewValue: 'Orange'},
    {value: 'gradient-green', viewValue: 'Green'},
    {value: 'gradient-pink', viewValue: 'Pink'},
    {value: 'gradient-red', viewValue: 'Red'},
    {value: 'gradient-amber', viewValue: 'Amber'},
    {value: 'gradient-gray', viewValue: 'Gray'},
    {value: 'gradient-brown', viewValue: 'Brown'},
    {value: 'gradient-lime', viewValue: 'Lime'}
  ];
  constructor(public dialogRef: MatDialogRef<LandDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public land: Land,
              public fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      code: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      naam: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null,
        bgColor: null
      })
    });
  }

  ngOnInit() {
    if(this.land){
      this.form.setValue(this.land);
    } 
    else{
      this.land = new Land();
      this.land.settings = new LandSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

}
