import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    MainPageComponent,
    UsuariosComponent,
    RegistrarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SocialModule { }