// angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { DriversRoutingModule } from './drivers-routing.module';

// components
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

// angular material
import {
  MatIconModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material'

// modules
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatFormFieldModule
  ],
  declarations: [
    ListComponent,
    EditComponent,
    CreateComponent
  ]
})
export class DriversModule { }
