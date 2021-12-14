import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetallesComponent } from './social/detalles/detalles.component';
import { MainPageComponent } from './social/main-page/main-page.component';
import { MostrarComponent } from './social/mostrar/mostrar.component';
import { RegistrarComponent } from './social/registrar/registrar.component';
import { SocialModule } from './social/social.module';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'mostrar', component: MostrarComponent },
  { path: 'detalles', component: DetallesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
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