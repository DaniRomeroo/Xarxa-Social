import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {

  }
  nuevoUsuario: PerfilUsuario = {
    nom: "",
    cognoms: "",
    correu: "",
    contrasenya: ""
  }

  registrarUsuario() {
    
    if(this.nuevoUsuario.nom.trim().length === 0) {
      return;
    }

    this.router.navigate(['mostrar', this.nuevoUsuario]);

  }
  
  mostrarUsuarios(){
    this.router.navigate(['mostrar']);
  }
}