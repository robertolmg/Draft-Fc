import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  draftFcApiUrl: 'http://localhost:5177'
};
