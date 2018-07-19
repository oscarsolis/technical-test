export class Vehicle {

  public _id?: string;
  public type: string;
  public plate: string;
  public dateSOAT: string;
  public model: string;
  public deleted: boolean;
  public createdAt?: string;
  public updatedAt?: string;

  constructor() {
    this.type = '';
    this.plate = '';
    this.dateSOAT = '';
    this.model = '';
    this.createdAt = '';
    this.updatedAt = '';
    this.deleted = false;
  }

}

