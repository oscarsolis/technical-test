import { Injectable } from '@angular/core';

import {
	Route,
	Router,
	CanLoad,
	CanActivate,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {

	constructor(
		private router: Router,
		private _authService: AuthService
	) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.checkLogin();
	}

	canLoad(
		route: Route
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.checkLogin();
	}

	checkLogin(): boolean {
		if (this._authService.existToken()) {
			if (this._authService.isTokenExpired()) {
				return true;
			} else {
				this.router.navigate(['/']);
				return false;
			}
		}
		return true;
	}
}
