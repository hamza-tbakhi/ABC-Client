// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    token: 'acessToken',
    roleClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    addressClaim: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/streetaddress',
    mobileClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone',
    userName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    idClaim: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
    apiPath: 'https://localhost:44357/api/'
};


