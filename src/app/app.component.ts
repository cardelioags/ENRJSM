import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { MaterializeAction } from "angular2-materialize";
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TdMediaService]
})
export class AppComponent implements OnInit, AfterViewInit {

  configSub1 = [{ gutter: 150, alignment: 'left', hover: true, constrainWidth: true }];
  configNavDrops = [{ belowOrigin: true }];

  private isAuth: boolean;
  private user: any;

  constructor(private auth: AuthService, private media: TdMediaService) { }

  ngOnInit() {
    this.isAuth = this.auth.loggedIn();
    this.auth.getIsAuth().subscribe(val => {
      this.isAuth = val;
    });
    //this.user = this.auth.userId();
    //console.log(this.user)
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    this.media.broadcast();
  }
 
  logout() {
    this.auth.logout();
  }
}
