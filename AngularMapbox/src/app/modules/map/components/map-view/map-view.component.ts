import { Component, OnInit } from '@angular/core';
import  *  as mapboxgl from  'mapbox-gl'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    (mapboxgl as typeof mapboxgl).accessToken =  "pk.eyJ1Ijoic2NvdGhpcyIsImEiOiJjaWp1Y2ltYmUwMDBicmJrdDQ4ZDBkaGN4In0.sbihZCZJ56-fsFNKHXF8YQ"
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
  }




}
