import { Component } from '@angular/core';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuario1: PerfilUsuario = {
    nom: "Dani",
    cognoms: "Romero",
    edat: 19,
    descripció: "No Bio Yet",
    correu: "email@example.com",
  }
  usuario2: PerfilUsuario = {
    nom: "Eric",
    cognoms: "Farre",
    edat: 19,
    descripció: "No Bio Yet",
    correu: "email@example.com",
  }

  usuarios: PerfilUsuario[] = [this.usuario1, this.usuario2];

}
