import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom: number = 5;

  lat: number = 17.3850;
  lng: number = 78.4867;



  constructor() {
  }

  ngOnInit() {
  }


}
