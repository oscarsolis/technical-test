import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';

// angular material
import {
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    ApplicationComponent
  ]
})
export class ApplicationModule { }
