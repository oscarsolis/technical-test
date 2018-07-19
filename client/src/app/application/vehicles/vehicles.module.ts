// angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { VehiclesRoutingModule } from './vehicles-routing.module';

// components
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

// angular material
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material'

// modules
import { SharedModule } from '../../shared';
import { MomentModule } from 'ngx-moment';


@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MomentModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    ListComponent,
    EditComponent,
    CreateComponent
  ]
})
export class VehiclesModule { }
