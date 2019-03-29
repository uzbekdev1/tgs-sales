import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressenComponent } from './addressen.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

export const routes = [
  { path: '', component: AddressenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [DatePipe],
  declarations: [
    AddressenComponent
  ]
  
})
export class AddressenModule { }
