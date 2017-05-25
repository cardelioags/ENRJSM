import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/observable";
import 'rjxs/add/operator/map';

@Injectable()
export class EntidadesService {
    constructor(private http: Http){}

    headers = new Headers ({'Content-Type': 'application/json'});

    private urlEntidades = 'localhost:3000/api/entidades';

    getEntidad(): Observable <any> {
        return this.http.get(this.urlEntidades)
        .map( res => res.json);
    }
}