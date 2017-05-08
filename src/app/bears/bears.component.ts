import { Component, OnInit } from '@angular/core';

import { BearsService } from "../services/bears.service";

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears: any;
  bear1: any = {};
  constructor(private bearService: BearsService) { 
    bearService.bearsList().subscribe(
      bears => this.bears = bears,
      error => console.error(`Error: ${error}`)
    );
  }

  createBear(bearName){
    this.bearService.addBear(bearName).subscribe(
      bear => this.bears.push(bear),
      error => console.error(`Error: ${error}`)
    );
  }
  remBear(id, idx){
    console.log(id + " : " + idx)
    this.bearService.delete(id).subscribe(
      bear => this.bears.splice(idx, 1),
      error => console.error(`Error: ${error}`)
    );
  }


  ngOnInit() {  }

}
