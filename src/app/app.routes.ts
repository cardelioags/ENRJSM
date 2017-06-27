import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";
import { PrincipalViewComponent } from "./principal-view/principal-view.component";
import { CatalogosComponent } from "./catalogos/catalogos.component";
import { PlanesComponent } from "./catalogos/planes/planes.component";
import { CiclosComponent } from "./catalogos/ciclos/ciclos.component";
import { PlanesFormComponent } from "./catalogos/planes/planes-form/planes-form.component";

const routes: Routes = [
    {path:'', component: MainComponent, children: [
        {path:'',component: PrincipalViewComponent},
        {path:'catalogos', component: CatalogosComponent, children:[
            {path:'planes', component: PlanesComponent},
            {path:'planes/nuevo', component: PlanesFormComponent},
            {path:'planes/:id', component: PlanesFormComponent},
            {path:'ciclos', component: CiclosComponent}
        ]}
    ]}
];

export const appRoutes: any = RouterModule.forRoot(routes); 