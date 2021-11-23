// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export const environment = {
  production: false,
  appVersion: 'v8.0.25',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'https://your-domain.com/api',
  appThemeName: 'Metronic',
  appHTMLIntegration: 'https://preview.keenthemes.com/metronic8/demo1/documentation/base/helpers/flex-layouts.html',
  appPurchaseUrl: 'https://1.envato.market/EA4JP',
  appPreviewUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1/',
  appPreviewAngularUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1',
  appPreviewDocsUrl: 'https://preview.keenthemes.com/metronic8/angular/docs',
  appPreviewChangelogUrl: 'https://preview.keenthemes.com/metronic8/angular/docs/docs/changelog',
};
export const config: any = {

  apiUrl: "http://localhost:12175",
  modalConfig: <NgbModalOptions>{
      size: "lg",
      backdrop: "static",
      keyboard: true,
    },
}

export const endpoint: any = {
  book :  config.apiUrl + "/api/Books/",
}

