import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { AuthModule } from "./modules/auth.module";
import { AuthGuard } from "./_guards/auth.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { appRoutes } from "./app.routes";

import { 
  CovalentLayoutModule 
} from "@covalent/core";
import { CovalentDynamicFormsModule } from "@covalent/dynamic-forms";


//directives
import { UppercaseDirective } from "./directives/uppercase";

//Services
import { BearsService } from "../services/bears.service";
import { AuthService } from "../services/auth.service";
import { EntidadesService } from "../services/entidades.service";
import { TdMediaService } from "@covalent/core";

//components
import { AppComponent } from './app.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { MainComponent } from './main/main.component';
import { CatalogosComponent } from "./catalogos/catalogos.component";
import { PlanesComponent } from './catalogos/planes/planes.component';
import { CiclosComponent } from './catalogos/ciclos/ciclos.component';
import { PlanesFormComponent } from './catalogos/planes/planes-form/planes-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalViewComponent,
    UppercaseDirective,
    MainComponent,
    CatalogosComponent,
    PlanesComponent,
    CiclosComponent,
    PlanesFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    CovalentLayoutModule,
    CovalentDynamicFormsModule
  ],
  providers: [ 
    BearsService,
    AuthGuard,
    AuthService,
    EntidadesService,
    TdMediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
