import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async getData() {
    return await fetch(environment.apiUrl + '/data/', {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
  }

  async airplanes() {
    return await fetch(environment.apiUrl + '/airplanes', {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json());
  }

}
