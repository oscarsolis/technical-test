import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AssignComponent } from './assign/assign.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
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
