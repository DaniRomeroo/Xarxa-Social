import { Component,EventEmitter, Output } from '@angular/core';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  nuevoUsuario: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripció: "",
    correu: "",
  }

  @Output() onNuevoUsuario: EventEmitter<PerfilUsuario> = new EventEmitter();

  registrarUsuario() {
    
    if(this.nuevoUsuario.nom.trim().length === 0) {
      return;
    }

    this.onNuevoUsuario.emit(this.nuevoUsuario);

    this.nuevoUsuario  = {
      nom: "",
      cognoms: "",
      edat: 0,
      descripció: "",
      correu: "",
    }
  }
}
