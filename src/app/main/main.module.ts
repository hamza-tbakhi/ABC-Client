import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ComplainsListComponent } from './complains-list/complains-list.component';
import { ComplainsFormComponent } from './complains-form/complains-form.component';


@NgModule({
  declarations: [
    ComplainsListComponent,
    ComplainsFormComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
