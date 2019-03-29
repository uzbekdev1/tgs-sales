import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { LandenService } from './landen.service';
import { LandDialogComponent } from './land-dialog/land-dialog.component';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ LandenService ]
})
export class LandenComponent implements OnInit {

    public page:any;
    public settings: Settings;

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['code', 'naam', 'actions'];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

    constructor(public appSettings:AppSettings,
                public dialog: MatDialog,
                public service:LandenService,){
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {
        this.service.getLands().subscribe(
            list => {
                let array = list.map(item => {
                //    let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
                    return {
                        $key: item.key,
                   //     departmentName,
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
        this.service.initializeFormGroup();
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(LandenComponent,dialogConfig);
    }

    onEdit(row){
        this.service.populateForm(row);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(LandenComponent,dialogConfig);
    }

    onDelete($key){
        if(confirm('Are you sure to delete this record ?')){
            this.service.deleteLand($key);
        //    this.notificationService.warn('! Deleted successfully');
        }
    }

    public onPageChanged(event){
        this.page = event;
        this.service.getLands();
        document.getElementById('main').scrollTop = 0;
    }

    public openLandDialog(land){
        let dialogRef = this.dialog.open(LandDialogComponent, {
            data: land
        });
        dialogRef.afterClosed().subscribe(land => {
            if(land){
                (land.id) ? this.service.updateLand(land) : this.service.insertLand(land);
            }
        });
    }

}