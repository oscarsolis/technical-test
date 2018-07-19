// core
import {
  Component,
  ViewChild
} from '@angular/core';

// services
import {
  UtilsService,
  DebugService,
  VehicleService
} from '../../../core/services';

// components
import { LoadingComponent } from '../../../shared/components';

// models
import { Vehicle } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  //
  vehicles: Array<Vehicle> = [];

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private _vehicleService: VehicleService
  ) {
    this.getVehicles();
  }

  /**
   *
   */
  getVehicles(): void {
    this._vehicleService
      .getVehicles()
      .then(result => {
        this.loadingComponent.hide();
        this.vehicles = result.map(val => Object.assign(new Vehicle(), val));
        this._debug.success('ListComponent getVehicles()', result);
      })
      .catch(error => {
        this.loadingComponent.showMessageError();
        this._debug.error('ListComponent getVehicles()', error);
      })
  }

  /**
   *
   * @param vehicleId
   */
  deleteVehicle(vehicleId: string): void {
    this._vehicleService
      .deleteVehicle(vehicleId)
      .then(result => {
        this.vehicles = this.vehicles.filter(vehicle => vehicle._id != vehicleId)
        this._utils.showToast(MESSAGES.deleteRegisterSuccess);
        this._debug.success('ListComponent deleteVehicle()', result);
      })
      .catch(error => {
        this._utils.showToast(MESSAGES.deleteRegisterError);
        this._debug.error('ListComponent deleteVehicle()', error);
      })

  }
}
