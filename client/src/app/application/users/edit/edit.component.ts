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
  UserService,
  UtilsService,
  DebugService
} from '../../../core/services';

// models
import { User } from '../../../models';

// others
import { MESSAGES } from '../../../config/messages.config';

// components
import { LoadingComponent } from '../../../shared/components';

@Component({
  selector: 'app-user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  // formulario reactive con validación
  userForm: FormGroup;

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
    private _userService: UserService,
    private routeActive: ActivatedRoute
  ) {
    this.getUser();
    this.createForm();
  }

  /**
  * Método que crea y asigna el formulario con validaciones para registrar un usuario
  */
  createForm() {
    this.userForm = this.formBuilder.group({
      _id: ['', Validators.required],
      name: ['', Validators.required],
      paternalSurname: ['', Validators.required],
      maternalSurname: '',
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^[0-9]*$/)
      ]],
      isActive: true,
      createdAt: ['', Validators.required],
    })
  }

  /**
   *
   */
  editUser(): void {
    let user: User = Object.assign(new User(), this.userForm.value);
    delete user.password;
    this.sendData = true;
    this._userService
      .updateUser(user)
      .then(result => {
        this.sendData = false;
        this.router.navigateByUrl('application/users');
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.success('EditUser editUser()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.editRegisterSuccess);
        this._debug.error('EditUser editUser()', err);
      })
  }

  /**
   *
   */
  getUser(): void {
    let userId: string = this.routeActive.snapshot.paramMap.get('id');
    this._userService
      .getUser(userId)
      .then(result => {
        this.loadingComponent.hide();
        this._debug.success('EditUser getUser()', result);
        this.userForm.patchValue(result);
      })
      .catch((error: HttpErrorResponse) => {
        this._debug.error('EditUser getUser()', error);
        (error.status === 404)
          ? this.loadingComponent.showMessageError(MESSAGES.registerNotFound)
          : this.loadingComponent.showMessageError();
      });
  }
}
