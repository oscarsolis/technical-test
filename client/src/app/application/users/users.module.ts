// angular core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { UsersRoutingModule } from './users-routing.module';

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
  MatCheckboxModule,
  MatFormFieldModule
} from '@angular/material'

// modules
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatFormFieldModule
  ],
  declarations: [
    ListComponent,
    EditComponent,
    CreateComponent
  ]
})
export class UsersModule { }
