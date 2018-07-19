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
  DriverService
} from '../../../core/services';

// models
import { Driver } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

// components
import { LoadingComponent } from '../../../shared/components';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  // formulario reactive con validación
  driverForm: FormGroup;

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
    private _driverService: DriverService
  ) {
    this.getDriver();
    this.createForm();
  }

  /**
  *
  */
  createForm() {
    this.driverForm = this.formBuilder.group({
      _id: ['', Validators.required],
      name: ['', Validators.required],
      paternalSurname: ['', Validators.required],
      maternalSurname: '',
      typeDocument: ['', Validators.required],
      numberDocument: ['', Validators.required],
      gender: ['', Validators.required],
      createdAt: ['', Validators.required],
    })
  }

  /**
   *
   */
  editDriver(): void {
    let driver: Driver = Object.assign(new Driver(), this.driverForm.value);
    this.sendData = true;
    this._driverService
      .updateDriver(driver)
      .then(result => {
        this.sendData = false;
        this.router.navigateByUrl('application/drivers');
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.success('EditDriver editDriver()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.error('EditDriver ditDriver()', err);
      })
  }

  /**
   *
   */
  getDriver(): void {
    let userId: string = this.routeActive.snapshot.paramMap.get('id');
    this._driverService
      .getDriver(userId)
      .then(result => {
        this.loadingComponent.hide();
        this._debug.success('EditDriver getDriver()', result);
        this.driverForm.patchValue(result);
      })
      .catch((error: HttpErrorResponse) => {
        this._debug.error('EditDriver getDriver()', error);
        (error.status === 404)
          ? this.loadingComponent.showMessageError(MESSAGES.registerNotFound)
          : this.loadingComponent.showMessageError();
      });
  }
}
