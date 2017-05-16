import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private isAuth: boolean;
  private user: any;
  constructor(private auth:AuthService){}
  ngOnInit(){
    this.isAuth = this.auth.loggedIn();
    this.auth.getIsAuth().subscribe(val => this.isAuth = val);
    //this.user = this.auth.userId();
    //console.log(this.user)
  }
  logout(){
    this.auth.logout();
  }
}
