import { Component, OnInit } from '@angular/core';
import { NdbService } from '../service/ndb.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  foods: Array<any> = [];
  favs: Array<string> = [];
  constructor(private ndbService: NdbService, private storage: Storage) {
    this.favs = [];
  }

  ngOnInit() {
    this.storage.get('favs')
      .then(favs => favs != null ? this.favs = favs : this.favs = [])
  }
  isFav(id) {
    return this.favs === null ?
      false :
      this.favs.includes(id);
  }
  addFavs(id) {
    this.favs.push(id);
    this.storage.set('favs', this.favs)
  }
  deleteFavs(id) {
    this.favs = this.favs.filter(fav => fav != id);
    this.storage.set('favs', this.favs)
  }
  searchFood(event) {
    this.ndbService.getSearchFood(event.detail.value).then(response => { return this.foods = response.foods })
  }

}
