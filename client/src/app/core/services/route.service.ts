import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Route } from '../../models';

// config
import { URLS } from '../../config/urls.config';

@Injectable()
export class RouteService {

  //
  url: string = URLS.routeCrud;

  constructor(private _http: HttpClient) { }

	/**
	 *
	 */
  assign(data: Route): Promise<any> {
    return this._http.post(`${this.url}/assign`, data).toPromise();
  }

  /**
   *
   * @param routeId
   */
  unassign(routeId): Promise<any> {
    return this._http.post(`${this.url}/unassign`, { routeId }).toPromise();
  }

  /**
   *
   */
  getRoutes(): Promise<Array<Route>> {
    return this._http.get<Array<Route>>(this.url).toPromise();
  }

}
