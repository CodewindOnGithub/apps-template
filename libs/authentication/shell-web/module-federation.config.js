module.exports = {
  name: 'authentication-shell-web',
  exposes: {
    './Routes':
      'libs/authentication/shell-web/src/app/remote-entry/entry.routes.ts',
  },
  additionalShared: [
    '@angular/core',
    '@angular/common',
    '@angular/router',
    '@ngrx/effects',
    '@ngrx/entity',
    '@ngrx/store',
    '@ngrx/store-devtools'
  ],
};
