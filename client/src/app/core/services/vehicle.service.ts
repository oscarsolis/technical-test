// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Vehicle } from '../../models';

// config
import { URLS } from '../../config/urls.config';

@Injectable()
export class VehicleService {

  //
  url: string = URLS.vehiclesCrud;

  constructor(private _http: HttpClient) { }

	/**
	 *
	 */
  saveVehicle(vehicle: Vehicle): Promise<any> {
    return this._http.post(this.url, vehicle).toPromise();
  }

	/**
	 * Método para obtener todos los vehiculos
	 */
  getVehicles(): Promise<Array<Vehicle>> {
    return this._http.get<Array<Vehicle>>(this.url).toPromise();
  }

	/**
	 *
	 * @param vehicle
	 */
  updateVehicle(vehicle: Vehicle) {
    let fullUrl = `${this.url}/${vehicle._id}`;
    return this._http.put(fullUrl, vehicle).toPromise();
  }

	/**
	 * Método para obtener el vehiculo con el id de parámetro
	 * @param id del vehiculo a buscar
	 */
  getVehicle(id: string): Promise<Vehicle> {
    let fullUrl = `${this.url}/${id}`;
    return this._http.get<Vehicle>(fullUrl).toPromise();
  }

	/**
	 * Método para eliminar el vehiculo con el id de parámetro
	 * @param vehicleId del vehiculo a eliminar
	 */
  deleteVehicle(vehicleId: string): Promise<any> {
    let fullUrl = `${this.url}/${vehicleId}`;
    return this._http.delete(fullUrl).toPromise();
  }
}
