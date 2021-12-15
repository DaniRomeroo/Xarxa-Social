import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  
  route: ActivatedRoute;
  router: Router;

  constructor(route: ActivatedRoute, router: Router) { 
    this.route = route;
    this.router = router;

  }

  ngOnInit(): void {

  }

  mostrarUsuarios(){
    this.router.navigate(['mostrar']);
  }

  administrarUsuarios(){
    this.router.navigate(['administrar']);
  }

}
