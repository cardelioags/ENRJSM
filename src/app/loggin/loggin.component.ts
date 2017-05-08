import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Usuario } from "../models/usuario";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent implements OnInit {
  usuario: Usuario = { usuario: "", password: "" };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(usuario) {
    this.auth.login(usuario);
  }
}
