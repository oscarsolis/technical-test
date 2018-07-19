export class Driver {

  public _id?: string;
  public name: string;
  public paternalSurname: string;
  public maternalSurname: string;
  public typeDocument: string;
  public numberDocument: string;
  public gender: string;
  public deleted: boolean;
  public createdAt?: string;
  public updatedAt?: string;

  constructor() {
    this.name = '';
    this.paternalSurname = '';
    this.maternalSurname = '';
    this.typeDocument = '';
    this.numberDocument = '';
    this.gender = '';
    this.createdAt = '';
    this.updatedAt = '';
    this.deleted = false;
  }

	/**
	 * Retorna el nombre completo del conductor
	 */
  fullName(): string {
    return `${this.name} ${this.paternalSurname} ${this.maternalSurname}`;
  }
}

