import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress [spinner]="false" color="#ff4081"></ng-progress>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';
}
