// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.0.32:3000',
  serverUrl: 'http://192.168.0.32:3000',
  socket: {
    port: 3000,
    url: 'http://192.168.0.32:3000'
  },
  maps: {
    apiKey: 'AIzaSyAoJ1-H1QpjwM4VKZSthqNFzlCd39bSXes',
    apiUrl: 'https://maps.googleapis.com/maps/api/js',
    libraries: 'places,drawing,visualization'
  }
};