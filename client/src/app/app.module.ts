import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

//
import { HttpClientModule } from '@angular/common/http';

// angular material
import { GestureConfig } from '@angular/material';

// config routes
import {
  HashLocationStrategy,
  LocationStrategy
} from '@angular/common';

// routing
import { AppRoutingModule } from './app-routing.module';

// modules
import { CoreModule } from './core/core.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressRouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
