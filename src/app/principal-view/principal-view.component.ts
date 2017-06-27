import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {
  dynamicForm = [
    {
      "name": "input",
      "type": "input",
      "required": false
    },
    {
      "name": "required-input",
      "label": "Input Label",
      "type": "input",
      "required": true
    },
    {
      "name": "textarea",
      "type": "textarea",
      "required": false
    },
    {
      "name": "text",
      "type": "text",
      "required": false,
      "default": "Default"
    },
    {
      "name": "required-password",
      "label": "Password Label",
      "type": "password",
      "required": true
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
