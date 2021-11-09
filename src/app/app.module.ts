import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './social/main-page/main-page.component';
import { RegistrarComponent } from './social/registrar/registrar.component';
import { SocialModule } from './social/social.module';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registrar', component: RegistrarComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }