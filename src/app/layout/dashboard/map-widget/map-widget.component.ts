import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IntakeOffice } from '../../../intake-office/IntakeOffice';
import { IntakeOfficeService } from '../../../intake-office/intake-office.service';

declare var jvm: any;

@Component({
  selector: 'app-map-widget',
  templateUrl: './map-widget.component.html',
  styleUrls: [
    './map-widget.component.css',
    '../../../../assets/lib/jqvmap/jqvmap.min.css'
  ]
})
export class MapWidgetComponent implements OnInit, AfterViewInit, OnDestroy {

  private office_data:    IntakeOffice;
  private intake_offices: IntakeOffice[];
  public  makeMap:        any;

  updateData(office_data: IntakeOffice) {
    this.office_data = office_data;
  }

  getMarkers(): any {
    var markers = [];
    for (var i in this.intake_offices) {
      var office = this.intake_offices[i];
      var params = {latLng: [office.lat, office.lng], name: office.name};
      markers.push(params);
    }
    return markers;
  }

/** Function setFocusLatLng() sourced from https://stackoverflow.com/questions/14728371/jvector-map-how-to-focus-on-a-marker */
  constructor( public router: Router, private intakeOfficeService: IntakeOfficeService ) { 
    this.intake_offices = intakeOfficeService.getOffices();
    this.makeMap = function() {
      var markerList = this.getMarkers();
      var lat        = this.office_data.lat;
      var lng        = this.office_data.lng;
      var id         = this.office_data.id;
      var labelCount = $('.jvectormap-label').length;
      for (var i = 0; i < labelCount; i++) {
        $('.jvectormap-label').remove();
      }
      $('#region-map').empty();
      $('#region-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'Black',
        regionSelectable: false,
        regionStyle: {
          initial: {
            fill: App.color.primary
          },
          hover: {
            "fill-opacity": 0.8
          }
        },
        markers: markerList,
        markerStyle: {
          initial: {
            r: 10
          },
          hover: {
            r: 15
          },
          selected: {
            fill: 'yellow'
          }
        },
        selectedMarkers: [id],
        onMarkerClick: function(event, code) {
          router.navigate(['/dashboard', markerList[code].name.toLowerCase()]);
          $('#region-map').vectorMap('get', 'mapObject').setFocusLatLng(7, lat, lng);
        },
        onRegionClick: function(event, code) {
          $('#region-map').vectorMap('set', 'focus', code);
        }
      });
      this.mapObj = $('#region-map').vectorMap('get', 'mapObject');
      this.mapObj.setFocusLatLng = function(scale, lat, lng){
        var point,
            proj = jvm.WorldMap.maps[this.params.map].projection,
            centralMeridian = proj.centralMeridian,
            width = this.width - this.baseTransX * 2 * this.baseScale,
            height = this.height - this.baseTransY * 2 * this.baseScale,
            inset,
            bbox,
            scaleFactor = this.scale / this.baseScale,
            centerX,
            centerY;
        if (lng < (-180 + centralMeridian)) {
            lng += 360;
        }
        point = jvm.Proj[proj.type](lat, lng, centralMeridian);
        inset = this.getInsetForPoint(point.x, point.y);
        if (inset) {
            bbox = inset.bbox;
            centerX = (point.x - bbox[0].x) / (bbox[1].x - bbox[0].x);
            centerY = (point.y - bbox[0].y) / (bbox[1].y - bbox[0].y);
            this.setFocus(scale, centerX, centerY);
        }
      }
      this.mapObj.setFocusLatLng(7, this.office_data.lat, this.office_data.lng);
    }
  }

  ngOnInit() { }

  ngAfterViewInit() { }

  ngOnDestroy() { }

}
