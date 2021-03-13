import { Component, OnInit } from '@angular/core';
import {Offre} from '../model/offre';

@Component({
  selector: 'app-offre-stage',
  templateUrl: './offre-stage.component.html',
  styleUrls: ['./offre-stage.component.css']
})

export class OffreStageComponent implements OnInit {
  show: boolean;
  listOffre: Offre[];
  constructor() { }

  ngOnInit(): void {
    this.listOffre = [
      {ref: 'Offre 1', entreprise: 'Ent x', etat: true, titre: 'Stage'},
      {ref: 'Offre 2', entreprise: 'Ent x', etat: false, titre: 'Stage'},
      {ref: 'Offre 3', entreprise: 'Ent x', etat: true, titre: 'Stage'},
    ];
    this.show = false;
  }

  bilan() {
    let count = 0;
    for (const i in this.listOffre) {
      if (this.listOffre[i].etat) {
        count++;
      }
    }
    this.show = true;
    return count;
  }
}
