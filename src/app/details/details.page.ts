import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NdbService } from '../service/ndb.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id: string = '';
  details: Object = {};
  constructor(private ndbService: NdbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.ndbService.getDetailsFood(this.id).then(response => this.details = response)
  }

}
