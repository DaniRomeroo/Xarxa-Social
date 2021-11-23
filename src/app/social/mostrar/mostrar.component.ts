import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  route: ActivatedRoute;
  router: Router;
  nuevoUsuario: PerfilUsuario  = {
    nom: "",
    cognoms: "",
    edat: 0,
    descripcio: "",
    correu: ""
  }

  constructor(route: ActivatedRoute, router: Router) { 
    this.route = route;
    this.router = router;
  }

  usuarios: PerfilUsuario[] = [];

  ngOnInit(): void {
    this.nuevoUsuario = {
      nom: String(this.route.snapshot.paramMap.get('nom')),
      cognoms: "",
      edat: 0,
      descripcio: "",
      correu: ""
    };

    if(this.nuevoUsuario.nom != 'null') {
      this.usuarios.push(this.nuevoUsuario);
    }

    this.router.navigate(['mostrar']);
  }
}
