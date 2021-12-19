import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component( {
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: [ './registrar.component.css' ]
} )
export class RegistrarComponent implements OnInit
{

  router: Router;

  constructor ( router: Router )
  {
    this.router = router;
  }

  ngOnInit (): void
  {

  }
  nuevoUsuario: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: "",
    contrasenya: ""
  }

  registrarUsuario ()
  {

    if ( this.nuevoUsuario.nom.trim().length === 0 || this.nuevoUsuario.cognoms.trim().length === 0 || this.nuevoUsuario.edat === 0 || this.nuevoUsuario.descripcio.trim().length === 0 || this.nuevoUsuario.correu.trim().length === 0 || this.nuevoUsuario.contrasenya.trim().length === 0 )
    {
      return;
    }

    this.router.navigate( [ 'mostrar', this.nuevoUsuario ] );

  }

  mostrarUsuarios ()
  {
    this.router.navigate( [ 'mostrar' ] );
  }
}