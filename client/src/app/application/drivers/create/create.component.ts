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
  DriverService,
} from '../../../core/services';

// models
import { Driver } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-driver-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // formulario reactive con validación
  driverForm: FormGroup;

  //
  sendData: boolean = false;

  //
  @ViewChild('form') form: NgForm;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private _driverService: DriverService
  ) {
    this.createForm();
  }

  /**
  * Método que crea y asigna el formulario con validaciones para registrar un usuario
  */
  createForm() {
    this.driverForm = this.formBuilder.group({
      name: ['', Validators.required],
      paternalSurname: ['', Validators.required],
      maternalSurname: '',
      typeDocument: ['', Validators.required],
      numberDocument: ['', Validators.required],
      gender: ['', Validators.required],
    })
  }

  /**
   *
   */
  registerDriver(): void {
    let driver: Driver = Object.assign(new Driver(), this.driverForm.value);
    this.sendData = true;
    this._driverService
      .saveDriver(driver)
      .then(result => {
        this.sendData = false;
        this.form.resetForm();
        this.driverForm.get('maternalSurname').setValue('');
        this._utils.showToast(MESSAGES.registerSuccess('Conductor'));
        this._debug.success('CreateComponent registerDriver()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.registerError);
        this._debug.error('CreateComponent registerDriver()', err);
      })
  }
}
