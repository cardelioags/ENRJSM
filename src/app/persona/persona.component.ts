import { Component, OnInit, Input } from '@angular/core';

import { Persona } from "../models/persona";
import { Domicilio } from "../models/domicilio";
import { Contacto} from "../models/contacto";

import { PersonaService } from "../services/persona.service";



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService],
})
export class PersonaComponent implements OnInit {
  private domicilio = new Domicilio({});
  private contacto = new Contacto({});
  private persona = new Persona({domicilio: this.domicilio, contacto: this.contacto});

  constructor(private personaService: PersonaService) { 
  }

  ngOnInit() {
  }

  registrar(personaModel){
    //this.persona = new Persona(this.personaModel)
    this.personaService.post(this.persona)
      .subscribe(
        persona => console.log(persona),
        err => console.error(`Error al registrar persona: ${err}`)
      );
  }

}
