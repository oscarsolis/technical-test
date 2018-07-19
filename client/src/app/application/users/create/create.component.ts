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

// custom validations
import { MatchPasswordValidation } from '../../../core/utils/match-password';

// services
import {
  UserService,
  UtilsService,
  DebugService
} from '../../../core/services';

// models
import { User } from '../../../models';
import { MESSAGES } from '../../../config/messages.config';

@Component({
  selector: 'app-user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // formulario reactive con validación
  userForm: FormGroup;

  //
  sendData: boolean = false;

  //
  @ViewChild('form') form: NgForm;

  constructor(
    private _utils: UtilsService,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private _userService: UserService,
  ) {
    this.createForm();
  }

  /**
  * Método que crea y asigna el formulario con validaciones para registrar un usuario
  */
  createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      paternalSurname: ['', Validators.required],
      maternalSurname: '',
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
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
      isActive: true
    }, { validator: MatchPasswordValidation.MatchPassword })
  }

  /**
   *
   */
  registerUser(): void {
    let user: User = Object.assign(new User(), this.userForm.value);
    this.sendData = true;
    this._userService
      .saveUser(user)
      .then(result => {
        this.sendData = false;
        this.form.resetForm();
        this.userForm.get('maternalSurname').setValue('');
        this._utils.showToast(MESSAGES.registerSuccess('Usuario'));
        this._debug.success('CreateComponent registerUser()', result);
      })
      .catch(err => {
        this.sendData = false;
        this._utils.showToast(MESSAGES.registerError);
        this._debug.error('CreateComponent registerUser()', err);
      })
  }
}
