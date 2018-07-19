/**
 * Servicio que controlara todos los métodos de autenticación de usuario
 */
import { Injectable } from '@angular/core';

// http
import { HttpClient } from '@angular/common/http';

// rxjs
import 'rxjs/add/operator/toPromise';

// models
import { User } from '../../models';

//configs
import { URLS } from '../../config/urls.config';

import { JwtHelperService } from '@auth0/angular-jwt';


import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  //
  TOKEN_KEY = '_token';

  //
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private _http: HttpClient,
    private router: Router
  ) { }

	/**
	 * Método para inicio de sesión
	 */
  logIn(email: string, password: string): Promise<any> {
    let url = URLS.loginUrl;
    let params = {
      email: email,
      password: password
    };
    return this._http.post(url, params).toPromise();
  }

	/**
	 * Método para cerrar sesión del usuario
	 */
  logOut(): void {
    localStorage.clear();
    this.redirectLogin();
  }

	/**
	 * Método  para obtener el token del usuario
	 */
  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

	/**
	 *
	 */
  existToken(): boolean {
    try {
      let _token: string = this.getToken();
      if (_token) {
        // esto retorna una excepción que solo necesito para saber si mi token es valido
        this.jwtHelper.decodeToken(_token);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

	/**
	 *
	 */
  isTokenExpired(): boolean {
    if (!this.existToken()) {
      return true;
    }
    return this.jwtHelper.isTokenExpired(this.getToken());
  }

	/**
	 *
	 * @param token
	 */
  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

	/**
	 *
	 */
  getIdentity(): User {
    if (!this.existToken()) {
      return new User();
    }
    let user = this.jwtHelper.decodeToken(this.getToken());
    return Object.assign(new User(), user);
  }

	/**
	 *
	 */
  redirectLogin(): void {
    this.router.navigate(['/login']);
  }
}
