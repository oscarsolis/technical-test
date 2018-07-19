// core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// forms
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

// components
import {
  LoadingComponent,
  EmptyCollectionComponent
} from './components';

// directivas
import {
  OnlyNumberDirective
} from './directives';

// components
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    // components
    LoadingComponent,
    EmptyCollectionComponent,
    //Directives
    OnlyNumberDirective,
  ],
  exports: [
    // modules
    FormsModule,
    ReactiveFormsModule,
    // components
    LoadingComponent,
    EmptyCollectionComponent,
    //Directives
    OnlyNumberDirective,
  ]
})
export class SharedModule { }
