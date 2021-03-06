import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirmar.validator';
import Swal from 'sweetalert2';

@Component( {
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: [ './registrar.component.css' ]
} )
export class RegistrarComponent implements OnInit
{

  router: Router;
  registerForm!: FormGroup;
  submitted = false;

  constructor ( router: Router, private formBuilder: FormBuilder )
  {
    this.router = router;
  }

  ngOnInit ()
  {
    this.registerForm = this.formBuilder.group( {
      nom: [ '', Validators.required ],
      cognoms: [ '', Validators.required ],
      edat: [ '', [ Validators.required, Validators.pattern( "^[1-9][0-9]?$" ) ] ],
      descripcio: [ '', Validators.required ],
      correu: [ '', [ Validators.required, Validators.pattern( "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" ) ] ],
      contrasenya: [ '', [ Validators.required, Validators.minLength( 6 ) ] ],
      confirmContra: [ '', Validators.required ]
    }, {
      validator: ConfirmedValidator( 'contrasenya', 'confirmContra' )
    } );

  }

  get f ()
  {
    return this.registerForm.controls;
  }

  registrarUsuario ()
  {
    this.submitted = true;

    if ( this.registerForm.invalid )
    {
      return;
    }

    Swal.fire( {
      position: 'center',
      icon: 'success',
      title: 'Usuario registrado correctamente!',
      showConfirmButton: false,
      timer: 1700
    } ).then( () =>
    {
      this.router.navigate( [ 'mostrar', this.registerForm.value ] );
    } );
  }

  mostrarUsuarios ()
  {
    this.router.navigate( [ 'mostrar' ] );
  }
}