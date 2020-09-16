
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FoundedItemComponent } from './founded-item/founded-item.component';
import { LostItemComponent } from './lost-item/lost-item.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'founded-item', component: FoundedItemComponent },
  { path: 'lost-item', component: LostItemComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'signin', component: SigninComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
