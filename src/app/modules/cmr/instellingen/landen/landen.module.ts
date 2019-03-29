import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { LandenComponent } from './landen.component';
import { LandDialogComponent } from './land-dialog/land-dialog.component';

export const routes = [
  { path: '', component: LandenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    LandenComponent,
    LandDialogComponent
  ],
  entryComponents:[
    LandDialogComponent
  ]
})
export class LandenModule { }
