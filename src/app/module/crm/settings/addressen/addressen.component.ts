import { Component, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { AddressenService, Element } from './addressen.service';

@Component({
  selector: 'app-addressen',
  templateUrl: './addressen.component.html',
  styleUrls: ['./addressen.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ AddressenService ]  
})

export class AddressenComponent {
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings:AppSettings, private addressenService:AddressenService) {
    this.settings = this.appSettings.settings; 
    this.dataSource = new MatTableDataSource<Element>(this.addressenService.getData());
  }
}