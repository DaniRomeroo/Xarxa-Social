import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component( {
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: [ './detalles.component.css' ]
} )
export class DetallesComponent implements OnInit
{

  route: ActivatedRoute;
  router: Router;
  usuarioSeleccionado: PerfilUsuario = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: "",
    contrasenya: ""
  }
  usuarioSeleccionadoCopia: PerfilUsuario = {
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
    this.usuarioSeleccionadoCopia = JSON.parse( localStorage.getItem( 'usuarioSeleccionado' ) || '[]' );
  }

  ngOnInit (): void
  {

    if ( String( this.route.snapshot.paramMap.get( 'nom' ) ) != 'null' )
    {
      this.usuarioSeleccionado = {
        nom: String( this.route.snapshot.paramMap.get( 'nom' ) ),
        cognoms: String( this.route.snapshot.paramMap.get( 'cognoms' ) ),
        edat: Number( this.route.snapshot.paramMap.get( 'edat' ) ),
        descripcio: String( this.route.snapshot.paramMap.get( 'descripcio' ) ),
        correu: String( this.route.snapshot.paramMap.get( 'correu' ) ),
        contrasenya: String( this.route.snapshot.paramMap.get( 'contrasenya' ) )
      };
    } else
    {
      this.usuarioSeleccionado = {
        nom: String( this.usuarioSeleccionadoCopia.nom ),
        cognoms: String( this.usuarioSeleccionadoCopia.cognoms ),
        edat: Number( this.usuarioSeleccionadoCopia.edat ),
        descripcio: String( this.usuarioSeleccionadoCopia.descripcio ),
        correu: String( this.usuarioSeleccionadoCopia.correu ),
        contrasenya: String( this.usuarioSeleccionadoCopia.contrasenya )
      };
    }

    window.history.replaceState( {}, document.title, "/detalles" );
  }

  mostrarUsuarios ()
  {
    this.router.navigate( [ 'mostrar' ] );
  }
}