import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component( {
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: [ './mostrar.component.css' ]
} )
export class MostrarComponent implements OnInit
{

  route: ActivatedRoute;
  router: Router;
  nuevoUsuario: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: "",
    contrasenya: ""
  }
  usuarios: PerfilUsuario[] = [];

  constructor ( route: ActivatedRoute, router: Router )
  {
    this.route = route;
    this.router = router;
    this.usuarios = JSON.parse( localStorage.getItem( 'listaUsuarios' ) || '[]' );
  }

  ngOnInit (): void
  {
    this.nuevoUsuario = {
      nom: String( this.route.snapshot.paramMap.get( 'nom' ) ),
      cognoms: String( this.route.snapshot.paramMap.get( 'cognoms' ) ),
      edat: Number( this.route.snapshot.paramMap.get( 'edat' ) ),
      descripcio: String( this.route.snapshot.paramMap.get( 'descripcio' ) ),
      correu: String( this.route.snapshot.paramMap.get( 'correu' ) ),
      contrasenya: String( this.route.snapshot.paramMap.get( 'contrasenya' ) )
    };

    if ( this.nuevoUsuario.nom != 'null' )
    {
      this.usuarios.push( this.nuevoUsuario );
      localStorage.setItem( 'listaUsuarios', JSON.stringify( this.usuarios ) );
    }

    this.router.navigate( [ 'mostrar' ] );
  }

  usuarioSeleccionado: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: "",
    contrasenya: ""
  }

  detallesUsuario ( usuario: PerfilUsuario )
  {

    this.usuarioSeleccionado.nom = usuario.nom;
    this.usuarioSeleccionado.cognoms = usuario.cognoms;
    this.usuarioSeleccionado.edat = usuario.edat;
    this.usuarioSeleccionado.descripcio = usuario.descripcio;
    this.usuarioSeleccionado.correu = usuario.correu;
    this.usuarioSeleccionado.contrasenya = usuario.contrasenya;

    localStorage.setItem( 'usuarioSeleccionado', JSON.stringify( this.usuarioSeleccionado ) );

    this.router.navigate( [ 'detalles', this.usuarioSeleccionado ] );
  }
}
