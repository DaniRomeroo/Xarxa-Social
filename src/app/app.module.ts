import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialModule } from './social/social.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
