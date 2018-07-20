import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SharedModule } from '../shared';

// components
import { NotFoundComponent } from './not-found.component';

// routing
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		NotFoundRoutingModule
	],
	declarations: [
		NotFoundComponent
	]
})
export class NotFoundModule { }
