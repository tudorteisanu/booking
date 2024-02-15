import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlInterceptor } from './interceptor/base-url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      },
      )
    ),
    provideHttpClient(withInterceptors([baseUrlInterceptor]))
  ]
};
