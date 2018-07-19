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

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // formulario reactive con validación
  vehicleForm: FormGroup;

  //
  sendData: boolean = false;

  //
  @ViewChild('form') form: NgForm;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private _vehicleService: VehicleService
  ) {
    this.createForm();
  }

  /**
  *
  */
  createForm() {
    this.vehicleForm = this.formBuilder.group({
      type: ['', Validators.required],
      plate: ['', Validators.required],
      dateSOAT: ['', Validators.required],
      model: ['', Validators.required]
    })
  }

  /**
   *
   */
  registerVehicle(): void {
    let vehicle: Vehicle = Object.assign(new Vehicle(), this.vehicleForm.value);
    this.sendData = true;
    this._vehicleService
      .saveVehicle(vehicle)
      .then(result => {
        this.sendData = false;
        this.form.resetForm();
        this._utils.showToast(MESSAGES.registerSuccess('Vehiculo'));
        this._debug.success('CreateComponent registerVehicle()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.registerError);
        this._debug.error('CreateComponent registerVehicle()', err);
      })
  }
}
