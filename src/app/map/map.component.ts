import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() airplanes: Array<any> = [];
  center: Array<number> = [45.3019, 12.2107];
  zoom: number = 10;
  styleMap: Array<any> = [
    {
      "stylers": [
        {
          "hue": "#ff1a00"
        },
        {
          "invert_lightness": true
        },
        {
          "saturation": -100
        },
        {
          "lightness": 33
        },
        {
          "gamma": 0.5
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2D333C"
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
