import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  route: ActivatedRoute;
  router: Router;
  usuarioSeleccionado: PerfilUsuario  = {
    nom: "",
    cognoms: "",
    correu: "",
    contrasenya: ""
  }
  usuarios: PerfilUsuario[] = [];

  constructor(route: ActivatedRoute, router: Router) { 
    this.route = route;
    this.router = router;
  }

  ngOnInit(): void {
    this.usuarioSeleccionado = {
      nom: String(this.route.snapshot.paramMap.get('nom')),
      cognoms: String(this.route.snapshot.paramMap.get('cognoms')),
      correu: String(this.route.snapshot.paramMap.get('correu')),
      contrasenya: String(this.route.snapshot.paramMap.get('contrasenya'))
    };

    window.history.replaceState({}, document.title, "/detalles");
  }

  volverMostrarUsusarios(){
    this.router.navigate(['mostrar']);
  }
}