import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  airplanes : Array<any> = [];
  openMenu : boolean = true;
  constructor() { }

  ngOnInit() {}

  changeOpenMenu(){
    this.openMenu = !this.openMenu;
  }
}
