import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { ROUTES } from "./routes";


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
