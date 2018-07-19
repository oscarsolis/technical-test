// core
import {
  Component,
  ViewChild
} from '@angular/core';

// services
import {
  UtilsService,
  DebugService,
  DriverService
} from '../../../core/services';

// components
import { LoadingComponent } from '../../../shared/components';

// models
import { Driver } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  //
  drivers: Array<Driver> = [];

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private _driverService: DriverService
  ) {
    this.getDrivers();
  }

  /**
   *
   */
  getDrivers(): void {
    this._driverService
      .getDrivers()
      .then(result => {
        this.loadingComponent.hide();
        this.drivers = result.map(val => Object.assign(new Driver(), val));
        this._debug.success('ListComponent getDrivers()', result);
      })
      .catch(error => {
        this.loadingComponent.showMessageError();
        this._debug.error('ListComponent getDrivers()', error);
      })
  }

  /**
   *
   * @param driverId
   */
  deleteDriver(driverId: string): void {
    this._driverService
      .deleteDriver(driverId)
      .then(result => {
        this.drivers = this.drivers.filter(driver => driver._id != driverId)
        this._utils.showToast(MESSAGES.deleteRegisterSuccess);
        this._debug.success('ListComponent deleteDriver()', result);
      })
      .catch(error => {
        this._utils.showToast(MESSAGES.deleteRegisterError);
        this._debug.error('ListComponent deleteDriver()', error);
      })

  }
}
