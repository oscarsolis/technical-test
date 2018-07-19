// angular core
import {
  ViewChild,
  Component
} from '@angular/core';

// forms
import {
  NgForm,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';

// http
import { HttpErrorResponse } from '@angular/common/http';

// routing
import {
  Router,
  ActivatedRoute
} from "@angular/router";

// services
import {
  UtilsService,
  DebugService,
  VehicleService
} from '../../../core/services';

// models
import { Vehicle } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

// components
import { LoadingComponent } from '../../../shared/components';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  // formulario reactive con validación
  vehicleForm: FormGroup;

  //
  sendData: boolean = false;

  //
  @ViewChild('form') form: NgForm;

  //
  @ViewChild('loading') loadingComponent: LoadingComponent;

  constructor(
    private router: Router,
    private _utils: UtilsService,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private routeActive: ActivatedRoute,
    private _vehicleService: VehicleService
  ) {
    this.getVehicle();
    this.createForm();
  }

  /**
  *
  */
  createForm() {
    this.vehicleForm = this.formBuilder.group({
      _id: ['', Validators.required],
      type: ['', Validators.required],
      plate: ['', Validators.required],
      dateSOAT: ['', Validators.required],
      model: ['', Validators.required],
      createdAt: ['', Validators.required],
    })
  }

  /**
   *
   */
  editVehicle(): void {
    let vehicle: Vehicle = Object.assign(new Vehicle(), this.vehicleForm.value);
    this.sendData = true;
    this._vehicleService
      .updateVehicle(vehicle)
      .then(result => {
        this.sendData = false;
        this.router.navigateByUrl('application/vehicles');
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.success('EditVehicle editVehicle()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.error('EditVehicle editVehicle()', err);
      })
  }

  /**
   *
   */
  getVehicle(): void {
    let userId: string = this.routeActive.snapshot.paramMap.get('id');
    this._vehicleService
      .getVehicle(userId)
      .then(result => {
        this.loadingComponent.hide();
        this._debug.success('EditVehicle getVehicle()', result);
        this.vehicleForm.patchValue(result);
      })
      .catch((error: HttpErrorResponse) => {
        this._debug.error('EditVehicle getVehicle()', error);
        (error.status === 404)
          ? this.loadingComponent.showMessageError(MESSAGES.registerNotFound)
          : this.loadingComponent.showMessageError();
      });
  }
}
