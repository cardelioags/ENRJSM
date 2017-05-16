import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { AuthHttp } from "angular2-jwt";
import 'rxjs/add/operator/map';



@Injectable()
export class BearsService {

    constructor (private authHttp: AuthHttp, private http:Http){ }

    headers = new Headers({'Content-Type':'application/json'})

    bearsList(){
        this.headers.append('Authorization','Bearer: '+localStorage.getItem('id_token'));
        let options = new RequestOptions({headers: this.headers})
        return this.authHttp.get('http://localhost:3000/api/bears/')
            .map(res => res.json());
    }
    addBear(name: string){
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions ({headers: headers});

        let body = JSON.stringify({name});

        return this.authHttp.post('http://localhost:3000/api/bears/', body, options)
            .map(res => res.json());
    }
    delete(id: string){
        return this.authHttp.delete(`http://localhost:3000/api/bears/${id}`)
            .map( res => res.json());
    }

}