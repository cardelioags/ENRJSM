import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items = [
    {route:'/', value:'Principal'},
    {route: '/catalogos', value:'Catálogos'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
