import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MarkmapComponent } from './markmap/markmap.component';
import { LostPageComponent } from './lost-page/lost-page.component';
import { FoundPageComponent } from './found-page/found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkmapComponent,
    LostPageComponent,
    FoundPageComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTQlQXI3tuDwySzLLvZd-rkb3MELA92Ow'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
