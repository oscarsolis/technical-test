// core
import {
	Injectable,
	Injector
} from '@angular/core';

// http
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpErrorResponse,
	HttpHeaders
} from '@angular/common/http';

// router
import { Router } from '@angular/router';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

// service
import { AuthService } from '../services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	constructor(
		private injector: Injector,
		private router: Router
	) { }

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		let auth = this.injector.get(AuthService);
		let token = auth.getToken();
		let headers = new HttpHeaders();
		if (!req.headers.has('Content-Type')) {
			headers = headers.append('Content-Type', 'application/json')
		}
		// si la petición no tiene el token se lo ponemos
		if (!req.headers.has('Authorization')) {
			headers = headers.append('Authorization', `Bearer ${token}`)
		} else {
			headers = headers.append('Authorization', req.headers.get('Authorization'));
		}
		let authReq = req.clone({ headers: headers });
		return next.handle(authReq).do(
			(event: HttpEvent<any>) => { },
			(err: any) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 401) {
						localStorage.clear();
						auth.redirectLogin();
					}
				}
			}
		)
	}
}
