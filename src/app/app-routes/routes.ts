import { Routes } from "@angular/router";
import { AuthGuard } from "../_guards/auth.guard";

import { LogginComponent } from '../loggin/loggin.component';
import { PrincipalViewComponent } from '../principal-view/principal-view.component';
import { BearsComponent } from '../bears/bears.component';
import { PersonaComponent } from "../persona/persona.component";
import { EntidadesComponent } from '../entidades/entidades.component';
import { ContactoInfoComponent } from "../contacto-info/contacto-info.component";

export const ROUTES: Routes = [
    { path: 'acceso', component: LogginComponent },
    { path: 'principal', component: PrincipalViewComponent },
    { path: 'bears', component: BearsComponent },
    { path: 'entidades', component: EntidadesComponent },
    { path: 'personas/registrar', component: PersonaComponent, canActivate:[AuthGuard]},
    {path: 'infoContacto', component: ContactoInfoComponent}
    /*{ path: 'docentes'},
    { path: 'tutorias'},
    { path: ''}*/
]