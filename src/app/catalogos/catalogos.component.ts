import { Component, AfterViewInit } from '@angular/core';
import { TdMediaService } from "@covalent/core";

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss']
})
export class CatalogosComponent implements AfterViewInit {

  constructor(private media: TdMediaService) { }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
