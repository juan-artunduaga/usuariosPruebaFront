import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    alert("El nombre de usuario ya existe")
    return throwError(error.statusText);
  }



  getUsuarios(query:string){
    return this.http.get<Usuario[]>(`http://localhost:8081/usuario/${query}`);
  }

  getUsuarioById(idUsuario:number){
    return this.http.get<Usuario>(`http://localhost:8081/usuario/id/${idUsuario}`);
  }

  saveUsuario(usuario:Usuario){
    return this.http.post(`http://localhost:8081/usuario`,usuario).pipe(catchError(this.handleError));
  }

  updateUsuario(idUsuario:number,cambios:Partial<Usuario>){
    return this.http.put(`http://localhost:8081/usuario/${idUsuario}`,cambios).pipe(catchError(this.handleError));
  }

  deleteUsuario(id:number){
    return this.http.delete(`http://localhost:8081/usuario/${id}`);
  }
  


}



