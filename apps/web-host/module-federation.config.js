module.exports = {
  name: 'web-host',
  remotes: ['authentication-shell-web'],
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
