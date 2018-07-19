import {
  Component,
  ViewChild
} from '@angular/core';

import { MatSidenav } from '@angular/material';

// services
import { AuthService } from '../core/services';

// model
import { User } from '../models';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent {

  //
  user: User;

  //
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private _authService: AuthService) {
    this.user = this._authService.getIdentity();
  }

  /**
   *
   * @param reason
   */
  close(): void {
    this.sidenav.close();
  }

  /**
   *
   */
  logOut(): void {
    this._authService.logOut();
  }

}
