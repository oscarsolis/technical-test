// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LogsRoutingModule } from './logs-routing.module';

// components
import { LogsComponent } from './logs.component';

// modules
import { SharedModule } from '../../shared';

// angular material
import {
  MatCardModule,
  MatButtonModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LogsRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [
    LogsComponent,
  ]
})
export class LogsModule { }


