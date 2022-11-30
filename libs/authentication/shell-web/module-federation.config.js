module.exports = {
  name: 'authentication-shell-web',
  exposes: {
    './Routes':
      'libs/authentication/shell-web/src/app/remote-entry/entry.routes.ts',
  },
};
