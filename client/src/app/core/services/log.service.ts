import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { User } from '../../models';

// config
import { URLS } from '../../config/urls.config';

@Injectable()
export class LogService {

  //
  url: string = URLS.logsCrud;

  constructor(private _http: HttpClient) { }

	/**
	 * Método para obtener todos los logs
	 */
  getLogs(): Promise<Array<any>> {
    return this._http.get<Array<any>>(this.url).toPromise();
  }

}
