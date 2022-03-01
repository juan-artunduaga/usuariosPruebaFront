import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuariosService } from 'src/app/modules/core/services/usuarios/usuarios.service';




@Component({
  selector: 'app-usuarios-table',
  templateUrl: './usuarios-table.component.html',
  styleUrls: ['./usuarios-table.component.scss']
})
export class UsuariosTableComponent implements OnInit {

  usuarios: Usuario[]=[];
  displayedColumns: string[] = ['Id', 'Nombre', 'Rol','Activo','Acciones'];
  usuario:Usuario;
  query:string=''


  constructor(
    private usuarioService:UsuariosService
    ) { }

  ngOnInit(): void {
    this.fetchUsuarios(this.query);
  }

  fetchUsuarios(query:string){
    this.usuarioService.getUsuarios(query)
    .subscribe((usuariosA)=>{
      this.usuarios = usuariosA;
      console.log(usuariosA)
    });
  }

  deleteProduct(id:number){
    console.log(id)
    this.usuarioService.deleteUsuario(id)
    .subscribe(rta=>{
      console.log(rta)
      this.query="";
      this.fetchUsuarios(this.query);
    });
  }

  clear(){
    console.log("limpio");
    this.query="";
    this.fetchUsuarios(this.query);
  }
}
