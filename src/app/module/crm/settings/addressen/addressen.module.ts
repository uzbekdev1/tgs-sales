import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressenComponent } from './addressen.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  { path: '', component: AddressenComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    AddressenComponent
  ]
})
export class AddressenModule { }
