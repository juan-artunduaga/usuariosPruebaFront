import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/modules/core/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router
  ) { this.buildForm();}

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({

      nombre:['',[Validators.required, Validators.minLength(3),Validators.maxLength(40),Validators.pattern('^[A-Za-z][A-Za-z ]{2,}')]],
      idRol:['',[Validators.required]],
      activo:['',[Validators.required]]
      
    });
  }

  saveProduct(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    if(this.form.valid){
      this.usuariosService.saveUsuario(this.form.value).
      subscribe((nuevoUsuario)=>{
        console.log(nuevoUsuario);
        this.router.navigate(['./']);
      });
    }
  }

}
