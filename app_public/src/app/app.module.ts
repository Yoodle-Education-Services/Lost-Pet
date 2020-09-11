import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LostItemComponent } from './lost-item/lost-item.component';
import { FoundedItemComponent } from './founded-item/founded-item.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HearderComponent } from './hearder/hearder.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LostItemComponent,
    FoundedItemComponent,
    SigninComponent,
    HearderComponent,
    RegistrationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
