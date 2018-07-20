import { environment } from '../../environments/environment'

const apiUrl: string = environment.apiUrl;

export const URLS = {
  loginUrl: `${apiUrl}/auth/login`,
  usersCrud: `${apiUrl}/users`,
  logsCrud: `${apiUrl}/logs`,
  driversCrud: `${apiUrl}/drivers`,
  vehiclesCrud: `${apiUrl}/vehicles`,
  routeCrud: `${apiUrl}/routes`
}
