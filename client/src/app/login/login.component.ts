// core
import { Component } from '@angular/core';

// http
import { HttpErrorResponse } from '@angular/common/http';

// forms
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

// routing
import { Router } from '@angular/router';

// services
import {
  AuthService,
  DebugService
} from '../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //
  loginForm: FormGroup;

  //
  classColor: string = '';

  //
  loading: boolean = false;

  //
  errorMsg: string = '';

  constructor(
    private router: Router,
    private _debug: DebugService,
    private formBuilder: FormBuilder,
    private _authService: AuthService
  ) {
    this.createForm();
  }

	/**
	 *
	 */
  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

	/**
	 *
	 */
  logIn(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.classColor = 'intelligence';
    this._authService.logIn(this.loginForm.value.email, this.loginForm.value.password)
      .then(result => {
        this.loading = false;
        this._authService.saveToken(result.token);
        this.router.navigateByUrl('application');
      })
      .catch((error: HttpErrorResponse) => {
        this._debug.error('LoginComponent logIn()', error);
        this.loading = false;
        this.classColor = 'red';
        (error.status === 404)
          ? this.errorMsg = 'Crendenciales Invalidas'
          : this.errorMsg = 'Algo salio mal inténtelo nuevamente';
      })
  }
}
