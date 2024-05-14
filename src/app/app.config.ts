import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { GoogleTagManagerService } from "angular-google-tag-manager";

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    { provide: "googleTagManagerId", useValue: "GTM-MKP62LKR" },
    GoogleTagManagerService
  ]
};
