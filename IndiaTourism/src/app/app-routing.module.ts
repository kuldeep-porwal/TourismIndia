import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { VistingPlaceComponent } from './pages/visting-place/visting-place.component';
import { AboutUsComponent } from './pages/common/about-us/about-us.component';
import { ContactUsComponent } from './pages/common/contact-us/contact-us.component';
import { VistingPlaceDetailComponent } from './pages/common/visting-place-detail/visting-place-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'visitingplace', component: VistingPlaceComponent },
  { path: 'visitingplace/:id', component: VistingPlaceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
