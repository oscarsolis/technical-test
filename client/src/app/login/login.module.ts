// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing
import { LoginRoutingModule } from './login-routing.module';

// components
import { LoginComponent } from './login.component';

// modules
import { SharedModule } from '../shared';

// angular material
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }


