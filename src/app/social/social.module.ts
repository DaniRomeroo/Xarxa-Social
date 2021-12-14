import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RouterModule } from '@angular/router';
import { MostrarComponent } from './mostrar/mostrar.component';
import { DetallesComponent } from './detalles/detalles.component';


@NgModule({
  declarations: [
    MainPageComponent,
    RegistrarComponent,
    MostrarComponent,
    DetallesComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SocialModule { }