import { Vehicle } from './vehicle.model';
import { Driver } from './driver.model';

export class Route {

  public _id?: string;
  public driver: Driver;
  public vehicle: Vehicle;
  public startPoint: Location;
  public endPoint: Location;
  public passengers: string;
  public company: string;
  public startTime: string;
  public endTime: string
  public status: string;

  constructor() {
    this.driver = new Driver();
    this.vehicle = new Vehicle();
    this.startPoint = new Location();
    this.endPoint = new Location();
    this.passengers = '';
    this.company = '';
    this.startTime = '';
    this.endTime = '';
    this.status = '';
  }

}

/**
 *
 */
export class Location {
  public type?: string;
  public coordinates: Array<number>;
  constructor() { }
}
