import { Component, OnInit, Input } from '@angular/core';
import { Contacto } from "../models/contacto";

@Component({
  selector: 'model-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contacto = new Contacto ({});
  @Input() parent: any;

  constructor() { }

  ngOnInit() {
    if (this.parent){
      this.parent.contacto = this.contacto;
    }
  }

}
