import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MainNavbarComponent } from './navigation/main-navbar/main-navbar.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { MainFooterComponent } from './footer/main-footer/main-footer.component';
import { MainCarousolComponent } from './slider/main-carousol/main-carousol.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainCarousolComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
