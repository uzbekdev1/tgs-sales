import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class LandenService {

    constructor(private firebase: AngularFireDatabase) { }
    landList: AngularFireList<any>;

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        code: new FormControl(''),
        naam: new FormControl('')
    });

    initializeFormGroup() {
        this.form.setValue({
            $key: null,
            code: '',
            naam: '',
        });
    }

    getLands() {
        this.landList = this.firebase.list('landen');
        return this.landList.snapshotChanges();
    }

    insertLand(land) {
        this.landList.push({
            code: land.code,
            naam: land.naam
        });
    }

    updateLand(land) {
        this.landList.update(land.$key,
            {
                code: land.code,
                naam: land.naam
            });
    }

    deleteLand($key: string) {
        this.landList.remove($key);
    }

    populateForm(land) {
        this.form.setValue(_.omit(land));
    }
}