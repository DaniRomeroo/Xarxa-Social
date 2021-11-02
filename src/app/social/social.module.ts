import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    RegistrarComponent,
  ],
  exports: [
    UsuariosComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SocialModule { }