import { Component, Input } from '@angular/core';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  @Input() usuariosComponenteHijo: PerfilUsuario[] = [];

}
