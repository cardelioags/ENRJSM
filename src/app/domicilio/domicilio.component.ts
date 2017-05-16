import { Component, OnInit, Output, Input } from '@angular/core';
import { Domicilio } from "../models/domicilio";

@Component({
  selector: 'model-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  domicilio = new Domicilio({});
  @Input() parent:any;

  constructor() { }

  ngOnInit() {
    if (this.parent){
      this.parent.domicilio = this.domicilio;
    }
  }

  save(){
    //this.domicilio = new Domicilio(this.domicilio)
  }

}
