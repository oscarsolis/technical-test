// core
import { Injectable } from '@angular/core';
import {
	Route,
	Router,
	CanLoad,
	CanActivate,
	CanActivateChild,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';

// services
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

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

	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | Observable<boolean> | Promise<boolean> {
		return this.checkLogin();
	}

	canLoad(
		route: Route
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.checkLogin();
	}

	checkLogin(): boolean {
		// si existe el token en localStorage
		if (this._authService.existToken()) {
			// si ya expiro
			if (this._authService.isTokenExpired()) {
				this._authService.redirectLogin();
				return false;
			} else {
				return true;
			}
		} else {
			this._authService.redirectLogin();
			return false;
		}
	}
}
