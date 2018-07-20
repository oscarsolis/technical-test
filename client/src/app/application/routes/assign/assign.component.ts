// angular core
import {
  ViewChild,
  Component
} from '@angular/core';

// services
import {
  UtilsService,
  DebugService,
  DriverService,
  VehicleService,
  RouteService
} from '../../../core/services';

// models
import {
  Driver,
  Vehicle
} from '../../../models';

// forms
import {
  NgForm,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

// others
import { MAP_OPTIONS } from '../../../config/map.config';
import { MESSAGES } from '../../../config/messages.config';

// components
import { LoadingComponent } from '../../../shared/components';
import { isDefined } from '../../../core/utils/util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent {

  //
  drivers: Array<Driver> = [];

  //
  vehicles: Array<Vehicle> = [];

  //
  startPoint: any = {
    coordinates: []
  }

  //
  endPoint: any = {
    coordinates: []
  }

  //
  routeForm: FormGroup;

  //
  mapOptions: google.maps.MapOptions = MAP_OPTIONS;

  //
  sendData: boolean = false;

  //
  mapStart: google.maps.Map;

  //
  mapEnd: google.maps.Map;

  //
  @ViewChild('form') form: NgForm;

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private _routeService: RouteService,
    private _driverService: DriverService,
    private _vehicleService: VehicleService
  ) {
    this.getData();
    this.createForm();
  }

  /**
   *
   */
  getData(): void {
    Promise
      .all([
        this._driverService.getDrivers(),
        this._vehicleService.getVehicles()
      ])
      .then(result => {
        this._debug.success('AssignComponent getData()', result);
        this.drivers = result[0].map(val => Object.assign(new Driver(), val));
        this.vehicles = result[1].map(val => Object.assign(new Vehicle(), val));
        this.loadingComponent.hide();
      })
      .catch(error => {
        this._debug.error('AssignComponent getData()', error);
        this.loadingComponent.showMessageError();
      })
  }

  /**
   *
   */
  createAssign(): void {
    let data = Object.assign(this.routeForm.value, { endPoint: this.endPoint })
    data = Object.assign(data, { startPoint: this.startPoint });
    this.sendData = true;
    this._routeService
      .assign(data)
      .then(result => {
        this.sendData = false;
        this.form.resetForm();
        this.endPoint.coordinates = [];
        this.startPoint.coordinates = [];
        this._utils.showToast(MESSAGES.registerSuccess('Ruta'));
        this._debug.success('AssignComponent createAssign()', result);
      })
      .catch((error: HttpErrorResponse) => {
        this.sendData = false;
        let message: string = MESSAGES.registerError;
        if (error.status === 422) {
          message = error.error.message;
        }
        this._utils.showToast(message);
        this._debug.error('AssignComponent createAssign()', error);
      })
  }

  /**
   *
   */
  createForm(): void {
    this.routeForm = this.formBuilder.group({
      driver: ['', Validators.required],
      vehicle: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      passengers: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  /**
   *
   * @param map
   * @param flag
   */
  mapReady(map, flag: string): void {
    (flag === 'map1')
      ? this.mapStart = map
      : this.mapEnd = map;
  }

  /**
   *
   * @param event
   * @param map
   */
  centerChanged(event, map: string): void {
    if (map === 'map2') {
      if (isDefined(this.mapEnd)) {
        this.endPoint.coordinates = this.getCoordinates(this.mapEnd.getCenter());
      }
    } else {
      if (isDefined(this.mapEnd)) {
        this.startPoint.coordinates = this.getCoordinates(this.mapStart.getCenter());
      }
    }
  }


  /**
   *
   * @param event
   * @param map
   */
  placeChanged(event, map: string) {
    if (map === 'map1') {
      this.mapStart.setCenter(event.geometry.location);
    } else {
      this.mapEnd.setCenter(event.geometry.location);
    }
  }

  /**
   *
   * @param latLng
   */
  getCoordinates(latLng: google.maps.LatLng): Array<number> {
    return [
      latLng.lng(),
      latLng.lat()
    ]
  }

}

