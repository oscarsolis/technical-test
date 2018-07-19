export class User {

  public _id?: string;
  public name: string;
  public paternalSurname: string;
  public maternalSurname: string;
  public email: string;
  public password?: string;
  public phone?: string;
  public isActive?: boolean;
  public deleted: boolean;
  public createdAt?: string;
  public updatedAt?: string;

  constructor() {
    this.name = '';
    this.paternalSurname = '';
    this.maternalSurname = '';
    this.email = '';
    this.isActive = true;
    this.phone = '';
    this.password = '';
    this.createdAt = '';
    this.updatedAt = '';
    this.deleted = false;
  }

	/**
	 * Retorna el nombre completo del usuario
	 */
  fullName(): string {
    return `${this.name} ${this.paternalSurname} ${this.maternalSurname}`;
  }
}

