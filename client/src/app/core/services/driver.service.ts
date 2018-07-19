// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Driver } from '../../models';

// config
import { URLS } from '../../config/urls.config';

@Injectable()
export class DriverService {

  //
  url: string = URLS.driversCrud;

  constructor(private _http: HttpClient) { }

	/**
	 *
	 */
  saveDriver(driver: Driver): Promise<any> {
    return this._http.post(this.url, driver).toPromise();
  }

	/**
	 * Método para obtener todos los conductores
	 */
  getDrivers(): Promise<Array<Driver>> {
    return this._http.get<Array<Driver>>(this.url).toPromise();
  }

	/**
	 *
	 * @param driver
	 */
  updateDriver(driver: Driver) {
    let fullUrl = `${this.url}/${driver._id}`;
    return this._http.put(fullUrl, driver).toPromise();
  }

	/**
	 * Método para obtener el conductor con el id de parámetro
	 * @param id del conductor a buscar
	 */
  getDriver(id: string): Promise<Driver> {
    let fullUrl = `${this.url}/${id}`;
    return this._http.get<Driver>(fullUrl).toPromise();
  }

	/**
	 * Método para eliminar el conductor con el id de parámetro
	 * @param driverId del conductor a eliminar
	 */
  deleteDriver(driverId: string): Promise<any> {
    let fullUrl = `${this.url}/${driverId}`;
    return this._http.delete(fullUrl).toPromise();
  }
}
