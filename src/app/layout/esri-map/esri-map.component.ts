import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadScript, loadModules }                  from 'esri-loader';


@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @ViewChild('mapViewNode') mapViewEl: ElementRef;

  public mapView: any;

  constructor() { }

  ngOnInit() {

    return loadScript({
      url: 'https://js.arcgis.com/4.8/'
    }).then(() => {
      loadModules([
        'esri/Map',
        'esri/views/MapView'
      ]).then(([
        Map,
        MapView
      ]) => {
        const mapProperties: any = {
          basemap: 'hybrid'
        };

        const map: any = new Map(mapProperties);

        const mapViewProperties: any = {
          container: this.mapViewEl.nativeElement,
          center: [-12.287, -37.114],
          zoom: 12,
          map
        };

        this.mapView = new MapView(mapViewProperties);
      });
    });      
  }
}
