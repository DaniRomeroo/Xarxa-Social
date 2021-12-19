import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';
import { MostrarComponent } from './mostrar/mostrar.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AdministrarComponent } from './administrar/administrar.component';


@NgModule( {
  declarations: [
    MainPageComponent,
    RegistrarComponent,
    MostrarComponent,
    DetallesComponent,
    AdministrarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
} )
export class SocialModule { }