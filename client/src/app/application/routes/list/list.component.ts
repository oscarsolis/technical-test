// core
import {
  Component,
  ViewChild
} from '@angular/core';

// services
import {
  RouteService,
  UtilsService,
  DebugService
} from '../../../core/services';

// components
import { LoadingComponent } from '../../../shared/components';

// models
import { Route, Vehicle, Driver } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-routes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  //
  routes: Array<Route> = [];

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private _routeService: RouteService,
  ) {
    this.getRoutes();
  }

  /**
   *
   */
  getRoutes(): void {
    this._routeService
      .getRoutes()
      .then(result => {
        this.loadingComponent.hide();
        this.routes = result.map(val => {
          val = Object.assign(new Route(), val);
          val.vehicle = Object.assign(new Vehicle(), val.vehicle);
          val.driver = Object.assign(new Driver(), val.driver);
          return val;
        });
        this._debug.success('ListComponent getRoutes()', result);
      })
      .catch(error => {
        this.loadingComponent.showMessageError();
        this._debug.error('ListComponent getRoutes()', error);
      })
  }

  /**
   *
   * @param routeID
   */
  unassign(routeID: string): void {
    this._routeService
      .unassign(routeID)
      .then(result => {
        this.routes = this.routes.filter(user => user._id != routeID)
        this._utils.showToast('Ruta desasignada correctamente');
        this._debug.success('ListComponent unassign()', result);
      })
      .catch(error => {
        this._utils.showToast('No se pudo desasignar la ruta');
        this._debug.error('ListComponent unassign()', error);
      })
  }


}
