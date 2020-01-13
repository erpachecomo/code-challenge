
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class NdbService {
  apiUrl: string = 'https://api.nal.usda.gov/fdc/v1/';

  apiKey: string = 'iurYMGpgJUBTyiElQlzyZYlg62TAWQqi9VciV8gH';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public http: HttpClient, private storage: Storage) {

  }

  async getSearchFood(food: string) {

    await this.http.get(`${this.apiUrl}search?api_key=${this.apiKey}&generalSearchInput=${encodeURI(food)}`)
      .toPromise().then(response => this.storage.set('food', response));
    return await this.storage.get('food');

  }

  async getDetailsFood(id: string) {

    await this.http.get(`${this.apiUrl}${id}?api_key=${this.apiKey}`)
      .toPromise().then(response => this.storage.set(id, response));
    return await this.storage.get(id);

  }







}

