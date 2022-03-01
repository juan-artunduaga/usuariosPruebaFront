import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { GestionUsuariosComponent } from './components/gestion-usuarios/gestion-usuarios.component';
import { UsuariosTableComponent } from './components/usuarios-table/usuarios-table.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
@NgModule({
  declarations: [
    GestionUsuariosComponent,
    UsuariosTableComponent,
    UsuarioFormComponent,
    UsuarioEditComponent
    
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class UsuariosModule { }
