import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/modules/core/services/usuarios/usuarios.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent implements OnInit {

  form: FormGroup;
  usuario:Usuario;
  id:number;
  
  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
      this.id =params.id;
      this.usuariosService.getUsuarioById(this.id).subscribe(usuario=>{
        this.form.patchValue({
          nombre:usuario.nombre,
          idRol:usuario.idRol,
          activo:usuario.activo
        });
      });
    })
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
      this.usuariosService.updateUsuario(this.id,this.form.value).
      subscribe((nuevoUsuario)=>{
        console.log(nuevoUsuario);
        this.router.navigate(['./']);
      }
        
      );

    }

    
  }

}
