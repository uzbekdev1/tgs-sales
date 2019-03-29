import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../../../shared/shared.module';
import { PipesModule } from '../../../../theme/pipes/pipes.module';
import { LandenComponent } from './landen.component';
import { LandenData } from './landen.data';
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
    InMemoryWebApiModule.forRoot(LandenData, { delay: 500 }),
    NgxPaginationModule,
    SharedModule,
    PipesModule    
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
