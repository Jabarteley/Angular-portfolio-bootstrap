import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { portfolioReducer } from './store/portfolio/portfolio.reducer';
import { PortfolioEffects } from './store/portfolio/portfolio.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({ portfolio: portfolioReducer }),
    provideEffects([PortfolioEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
