import { Injectable } from '@angular/core';
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router:Router){}

    canActivate(){
        if(this.auth.loggedIn()){
            //logeado, asi que regresamos true
            return true;
        }
        //no logeado asi que redirigimos a login
        this.router.navigateByUrl('/acceso');
        return false;
    }
}