import {
  NgModule,
  ErrorHandler
} from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import {
  LogService,
  UserService,
  AuthService,
  UtilsService,
  DriverService,
  DebugService,
  VehicleService
} from './services';

// guards
import {
  AuthGuard,
  LoginGuard
} from './guards';

// interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { GlobalErrorHandler } from './interceptors/error-handler';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // services
    LogService,
    UserService,
    AuthService,
    UtilsService,
    DriverService,
    DebugService,
    VehicleService,
    // guards
    AuthGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class CoreModule { }
