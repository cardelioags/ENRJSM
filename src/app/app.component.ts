import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  configSub1 = [{ gutter: 150, alignment: 'left', hover: true, constrainWidth: true }];
  configNavDrops = [{ belowOrigin: true }];

  private isAuth: boolean;
  private user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.isAuth = this.auth.loggedIn();
    this.auth.getIsAuth().subscribe(val => this.isAuth = val);
    //this.user = this.auth.userId();
    //console.log(this.user)
  }
 
  logout() {
    this.auth.logout();
  }
}
