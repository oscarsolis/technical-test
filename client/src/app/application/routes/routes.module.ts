import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';

// components
import { ListComponent } from './list/list.component';
import { AssignComponent } from './assign/assign.component';

// modules
import { SharedModule } from '../../shared';
import { NguiMapModule } from '@ngui/map';
import {
  OwlDateTimeIntl,
  OwlDateTimeModule,
  OwlNativeDateTimeModule
} from 'ng-pick-datetime';
import { MomentModule } from 'ngx-moment';

// others
import { DefaultIntl } from '../../config/lang-datepicker.config';

//
import { environment } from '../../../environments/environment';

// angular material
import {
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatDividerModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatFormFieldModule
} from '@angular/material'

@NgModule({
  imports: [
    MomentModule,
    SharedModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RoutesRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NguiMapModule.forRoot({
      apiUrl: `${environment.maps.apiUrl}?key=${environment.maps.apiKey}&libraries=${environment.maps.libraries}`
    }),
  ],
  declarations: [
    ListComponent,
    AssignComponent
  ],
  providers: [
    {
      provide: OwlDateTimeIntl,
      useValue: DefaultIntl
    }
  ]

})
export class RoutesModule { }
