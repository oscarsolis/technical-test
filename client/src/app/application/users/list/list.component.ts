// core
import {
  Component,
  ViewChild
} from '@angular/core';

// services
import {
  UserService,
  UtilsService,
  DebugService
} from '../../../core/services';

// components
import { LoadingComponent } from '../../../shared/components';

// models
import { User } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  //
  users: Array<User> = [];

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private _userService: UserService,
  ) {
    this.getUsers();
  }

  /**
   *
   */
  getUsers(): void {
    this._userService
      .getUsers()
      .then(result => {
        this.loadingComponent.hide();
        this.users = result.map(val => Object.assign(new User(), val));
        this._debug.success('ListComponent getUsers()', result);
      })
      .catch(error => {
        this.loadingComponent.showMessageError();
        this._debug.error('ListComponent getUsers()', error);
      })
  }

  /**
   *
   * @param userId
   */
  deleteUser(userId: string): void {
    this._userService
      .deleteUser(userId)
      .then(result => {
        this.users = this.users.filter(user => user._id != userId)
        this._utils.showToast(MESSAGES.deleteRegisterSuccess);
        this._debug.success('ListComponent deleteUser()', result);
      })
      .catch(error => {
        this._utils.showToast(MESSAGES.deleteRegisterError);
        this._debug.error('ListComponent deleteUser()', error);
      })

  }
}
