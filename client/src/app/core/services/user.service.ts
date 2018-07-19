/**
 * Servicio para el crud de usuarios
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { User } from '../../models';

// config
import { URLS } from '../../config/urls.config';

@Injectable()
export class UserService {

  //
  url: string = URLS.usersCrud;

  constructor(private _http: HttpClient) { }

	/**
	 *
	 */
  saveUser(user: User): Promise<any> {
    return this._http.post(this.url, user).toPromise();
  }

	/**
	 * Método para obtener todos los usuarios
	 */
  getUsers(): Promise<Array<User>> {
    return this._http.get<Array<User>>(this.url).toPromise();
  }

	/**
	 *
	 * @param user
	 */
  updateUser(user: User) {
    let fullUrl = `${this.url}/${user._id}`;
    return this._http.put(fullUrl, user).toPromise();
  }

	/**
	 * Método para obtener el usuario con el id de parámetro
	 * @param id del usuario a buscar
	 */
  getUser(id: string): Promise<User> {
    let fullUrl = `${this.url}/${id}`;
    return this._http.get<User>(fullUrl).toPromise();
  }

	/**
	 * Método para eliminar el usuario con el id de parámetro
	 * @param id del usuario a eliminar
	 */
  deleteUser(id: string): Promise<any> {
    let fullUrl = `${this.url}/${id}`;
    return this._http.delete(fullUrl).toPromise();
  }
}
