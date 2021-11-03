import { Component } from '@angular/core';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  usuario1: PerfilUsuario = {
    nom: "Dani",
    cognoms: "Romero",
    edat: 19,
    descripcio: "No Bio Yet",
    correu: "email@example.com",
  }
  usuario2: PerfilUsuario = {
    nom: "Eric",
    cognoms: "Farre",
    edat: 19,
    descripcio: "No Bio Yet",
    correu: "email@example.com",
  }

  usuarios: PerfilUsuario[] = [this.usuario1, this.usuario2];

  agregarUsuario(data: PerfilUsuario){
    this.usuarios.push(data);
  }
}
