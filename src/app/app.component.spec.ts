import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { AuthModule } from "./modules/auth.module";

import { AppComponent } from './app.component';
import { LogginComponent } from './loggin/loggin.component';
import { PrincipalViewComponent } from './principal-view/principal-view.component';
import { BearsComponent } from './bears/bears.component';
import { PersonaComponent } from './persona/persona.component';
import { DomicilioComponent } from './domicilio/domicilio.component';
import { ContactoComponent } from './contacto/contacto.component';

import { UppercaseDirective } from "./directives/uppercase";

import { ROUTES } from "./app-routes/routes";

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(ROUTES),
        AuthModule,
      ],
      declarations: [
        AppComponent,
        LogginComponent,
        PrincipalViewComponent,
        BearsComponent,
        PersonaComponent,
        DomicilioComponent,
        UppercaseDirective,
        ContactoComponent,
      ],
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10)
    });
    let done = false;
    promise.then(() => done = true);
    tick(50);
    expect(done).toBeTruthy();
  }));
  it('navigate to "" redirects you to AppComponent', fakeAsync(() => {
    router.navigate(['']);
    tick(50);
    expect(location.path()).toBe('/');
  }));
  it('navigate to "search" takes you to /principal', fakeAsync(() => {
    router.navigate(['/principal']);
    tick(50);
    expect(location.path()).toBe('/principal');
  }));
  it('navigate to "search" takes you to /bears', fakeAsync(() => {
    router.navigate(['/bears']);
    tick(50);
    expect(location.path()).toBe('/bears');
  }));
});