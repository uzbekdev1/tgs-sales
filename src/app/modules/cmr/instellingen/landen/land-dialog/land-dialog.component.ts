import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { LandenService } from '../landen.service';
import { LandenComponent } from '../landen.component';

@Component({
  selector: 'app-land-dialog',
  templateUrl: './land-dialog.component.html',
  styleUrls: ['./land-dialog.component.scss']
})
export class LandDialogComponent implements OnInit {

  public form:FormGroup;

    constructor(private service: LandenService, public dialogRef: MatDialogRef<LandenComponent>) { }

    ngOnInit() {
        this.service.getLands();
    }

    onClear() {
        this.service.form.reset();
        this.service.initializeFormGroup();
    }

    onSubmit() {
        if (this.service.form.valid) {
            if (!this.service.form.get('$key').value)
                this.service.insertLand(this.service.form.value);
            else
                this.service.updateLand(this.service.form.value);
            this.service.form.reset();
            this.service.initializeFormGroup();
            this.onClose();
        }
    }

    onClose() {
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    }

}
