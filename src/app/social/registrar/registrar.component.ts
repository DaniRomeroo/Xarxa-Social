import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nuevoUsuario: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: ""
  }

  @Input() usuariosComponenteAgregar: PerfilUsuario[] = [];

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
      descripcio: "",
      correu: ""
    }
  }
}