import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';


const routes: Routes = [
  {path:"",component:GestionUsuariosComponent},
  {path:"crear",component:UsuarioFormComponent},
  {path:"editar/:id",component:UsuarioEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
