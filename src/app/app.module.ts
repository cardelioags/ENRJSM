import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from "./modules/auth.module";
import { AuthGuard } from "./_guards/auth.guard";

import { MaterializeModule } from "angular2-materialize";
import { AppRoutesModule } from "./app-routes/app-routes.module";

//directives
import { UppercaseDirective } from "./directives/uppercase";

//components
import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { BearsComponent } from './bears/bears.component';
import { PersonaComponent } from './persona/persona.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { ContactoComponent } from './contacto/contacto.component';

//Services
import { BearsService } from "./services/bears.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    PrincipalViewComponent,
    BearsComponent,
    PersonaComponent,
    DomicilioComponent,
    UppercaseDirective,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    MaterializeModule,
    AppRoutesModule
  ],
  providers: [ 
    BearsService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
