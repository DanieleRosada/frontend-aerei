import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  @Input() p : Array<any> = [];
  @Input() color : string = "#FFFFFF";

  constructor() { }

  ngOnInit() { }

  getIcon() {
    let color = this.color.replace('#', '');
    return "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color;
  }
}
