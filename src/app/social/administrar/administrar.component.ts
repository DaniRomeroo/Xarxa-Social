import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component( {
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: [ './administrar.component.css' ]
} )
export class AdministrarComponent implements OnInit
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
  }

  eliminarUsuario ( usuario: PerfilUsuario )
  {

    this.usuarios.forEach( ( value, index ) =>
    {
      if ( value.nom == usuario.nom )
      {
        this.usuarios.splice( index, 1 );
      }
    } );

    if ( this.usuarios.length === 0 )
    {
      localStorage.removeItem( 'listaUsuarios' );
    } else
    {
      localStorage.setItem( 'listaUsuarios', JSON.stringify( this.usuarios ) );
    }

    this.router.navigate( [ 'administrar' ] );
  }
}
