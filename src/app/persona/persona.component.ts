import { Component, OnInit } from '@angular/core';

import { Persona } from "../models/persona";
import { PersonaService } from "../services/persona.service";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {
  private personaModel = {domicilio:{}};
  private persona: Persona;


  constructor(private personaService: PersonaService) { 
    
  }

  ngOnInit() {
  }

  registrar(personaModel){
    this.persona = new Persona(this.personaModel)
    this.personaService.post(this.persona)
      .subscribe(
        persona => console.log(persona),
        err => console.error(`Error al registrar persona: ${err}`)
      );
  }

}
