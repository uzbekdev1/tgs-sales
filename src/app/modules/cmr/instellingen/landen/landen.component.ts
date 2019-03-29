import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { Land } from './landen.model';
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
    public landen: Land[];
    public searchText: string;
    public page:any;
    public settings: Settings;
    public showSearch:boolean = true;
    public viewType:string = 'grid';
    constructor(public appSettings:AppSettings, 
                public dialog: MatDialog,
                public landenService:LandenService){
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {
        this.getLanden();         
    }

    public getLanden(): void {
        this.landen = null; //for show spinner each time
        this.landenService.getLanden().subscribe(landen => this.landen = landen);    
    }
    public addLand(land:Land){
        this.landenService.addLand(land).subscribe(land => this.getLanden());
    }
    public updateLand(land:Land){
        this.landenService.updateLand(land).subscribe(land => this.getLanden());
    }
    public deleteLand(land:Land){
       this.landenService.deleteLand(land.id).subscribe(land => this.getLanden());
    }
    
    public changeView(viewType){
        this.viewType = viewType;
        this.showSearch = false;
    }

    public onPageChanged(event){
        this.page = event;
        this.getLanden();    
        document.getElementById('main').scrollTop = 0;
    }

    public openLandDialog(land){
        let dialogRef = this.dialog.open(LandDialogComponent, {
            data: land
        });
        dialogRef.afterClosed().subscribe(land => {
            if(land){
                (land.id) ? this.updateLand(land) : this.addLand(land);
            }
        });
        this.showSearch = false;
    }

}