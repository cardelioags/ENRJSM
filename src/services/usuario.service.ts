import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';

import { Usuario } from "../models/usuario";

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  private urlUsuarios = "http://localhost:3000/api/usuarios"

  get() : Observable<Usuario[]> {
    return this.http.get(this.urlUsuarios)
      .map( res => res.json());
  };
  getOne(id) : Observable<Usuario> {

    return this.http.get(this.urlUsuarios+'/id')
      .map(res => res.json());
  }
  post(usuario): Observable<Usuario> {
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post(this.urlUsuarios, usuario, options)
      .map( res => res.json());
  };
}
