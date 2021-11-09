import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilUsuario } from '../interfaces/social.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

  router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {

  }

  usuarios: PerfilUsuario[] = [];

  agregarUsuario(data: PerfilUsuario){
    this.usuarios.push(data);
  }

  mostrarRegistro(){
    this.router.navigate(['registrar']);
  }

}
