import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'drivers',
        loadChildren: './drivers/drivers.module#DriversModule'
      },
      {
        path: 'vehicles',
        loadChildren: './vehicles/vehicles.module#VehiclesModule'
      },
      {
        path: 'routes',
        loadChildren: './routes/routes.module#RoutesModule'
      },
      {
        path: 'logs',
        loadChildren: './logs/logs.module#LogsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
