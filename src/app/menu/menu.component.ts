import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';
import * as moment from 'moment';
import * as io from 'socket.io-client';
import { Moment } from 'moment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() data: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  airplanes: Array<any> = [];
  socket: SocketIOClient.Socket;


  constructor(private storage: StorageService) {
    this.socket = io.connect('http://127.0.0.1:5432');
  }

  ngOnInit() {
    this.loadMenu();
    this.reciveNewAirplaneData();
  }

  time(time) {
    return moment(time).format("HH:mm:ss");
  }

  loadMenu() {
    this.storage.airplanes().then(res => {
      res.forEach(a => {
        a.p = null;
      });
      this.airplanes = res;
    });
  }

  laodData() {
    this.storage.getData().then(res => {
      res.forEach(data => {
        let target = this.airplanes.findIndex(b => b.id == data.id);
        this.airplanes[target].p = data;
      });
    });
  }

  reciveNewAirplaneData() {
    this.socket.on('data', (data) => {
      let target = this.airplanes.findIndex(b => b.id == data.id);
      this.airplanes[target].p = data;
      this.data.emit(this.airplanes);
    });
  }
}
