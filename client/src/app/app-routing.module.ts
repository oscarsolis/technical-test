// core
import { NgModule } from '@angular/core';

// angular router
import {
  Routes,
  RouterModule
} from '@angular/router';

// guards
import {
  AuthGuard,
  LoginGuard
} from './core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'application',
    pathMatch: 'full'
  },
  {
    path: 'application',
    loadChildren: './application/application.module#ApplicationModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
