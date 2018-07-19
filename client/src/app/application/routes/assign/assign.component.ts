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
  VehicleService
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
    console.log(this.routeForm.value);
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
      company: ['', Validators.required],
      status: ['active', Validators.required]
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
  placeChanged(event, map: string) {
    console.log(event, map);
    if (map === 'map1') {
      this.mapStart.setCenter(event.geometry.location);
    } else {
      this.mapEnd.setCenter(event.geometry.location);
    }
  }

}

