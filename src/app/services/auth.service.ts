import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { tokenNotExpired, JwtHelper } from "angular2-jwt";
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/observable';
import { Subject } from "rxjs/subject";


@Injectable()
export class AuthService {

    isAuth = new Subject<any>();

    constructor (private http: Http){}
    private urlAuth = "http://localhost:3000/api/usuarios/login";

    login(usuario) {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: headers});
                
        return this.http.post(this.urlAuth, usuario, options)
            .map(res => res.json())
            .subscribe(
                data => {
                    localStorage.setItem('id_token', data.token);
                    this.isAuth.next(true)
                },
                error => console.error(`Error: ${error}`)
            );
    };
    logout(){
        localStorage.removeItem('id_token');
        this.isAuth.next(false);
    }
    loggedIn(){
        return tokenNotExpired('id_token');
    };
    userId(){
        let jwtHelper: JwtHelper = new JwtHelper();
        let token = localStorage.getItem('id_token'); 
        if (this.loggedIn())
            return jwtHelper.decodeToken(token);
        return;
    }
    getIsAuth(): Observable<any> {
        return this.isAuth.asObservable();
    }


}