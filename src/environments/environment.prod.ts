import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

export const environment = {
  production: true,
  appVersion: 'v8.0.25',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: true,
  apiUrl: 'api',
  appThemeName: 'Metronic',
  appPurchaseUrl: 'https://1.envato.market/EA4JP',
  appHTMLIntegration: 'https://preview.keenthemes.com/metronic8/demo1/documentation/base/helpers/flex-layouts.html',
  appPreviewUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1/',
  appPreviewAngularUrl: 'https://preview.keenthemes.com/metronic8/angular/demo1',
  appPreviewDocsUrl: 'https://preview.keenthemes.com/metronic8/angular/docs',
  appPreviewChangelogUrl:
    'https://preview.keenthemes.com/metronic8/angular/docs/changelog',
  // apiUrl: 'mysite.com/api'
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
