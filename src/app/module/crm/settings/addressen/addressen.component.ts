import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { AddressenService } from './addressen.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { AdresComponent } from './adres/adres.component';

@Component({
  selector: 'app-addressen',
  templateUrl: './addressen.component.html',
  styleUrls: ['./addressen.component.scss'],
//  encapsulation: ViewEncapsulation.None,
  providers: [ AddressenService ]  
})

export class AddressenComponent implements OnInit {

  public settings: Settings; 
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(public appSettings:AppSettings, private addressenService:AddressenService, private dialog: MatDialog,) {
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.addressenService.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
       //   let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.key,
        //    departmentName,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
      });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.addressenService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdresComponent,dialogConfig);
  }

  onEdit(row){
    this.addressenService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AdresComponent,dialogConfig);
  }
  
  onDelete($key){
    if(confirm('Are you sure to delete this record ?')){
    this.addressenService.deleteEmployee($key);
    //this.notificationService.warn('! Deleted successfully');
    }
  }

}