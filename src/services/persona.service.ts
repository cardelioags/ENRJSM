import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/observable';

import { Persona } from "../models/persona";

@Injectable()
export class PersonaService {
    constructor(private http: Http){}

    private urlPersonas = "http://localhost:3000/api/personas";

    get() : Observable<Persona[]>  {
        return this.http.get(this.urlPersonas)
            .map( res => res.json());
    };
    post(persona): Observable<Persona> {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
        
        return this.http.post(this.urlPersonas, persona, options)
            .map( res => res.json());
    };
    delete(id): Observable<any> {
        return this.http.delete(this.urlPersonas + '/' + id)
            .map( res => res.json());
    };
    getOne(){};
    update(){};
}