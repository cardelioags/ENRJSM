import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()
export class BearsService {

    constructor (private http: Http){ }

    bearsList(){
        return this.http.get('http://localhost:3000/api/bears/')
            .map(res => res.json());
    }
    addBear(name: string){
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions ({headers: headers});

        let body = JSON.stringify({name});

        return this.http.post('http://localhost:3000/api/bears/', body, options)
            .map(res => res.json());
    }
    delete(id: string){
        return this.http.delete(`http://localhost:3000/api/bears/${id}`)
            .map( res => res.json());
    }

}