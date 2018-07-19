import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
  {
    path: '',
    component: AssignComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'assign',
        component: AssignComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
