import { Component, OnInit } from '@angular/core';
import {Offre} from '../model/offre';

@Component({
  selector: 'app-offre-stage',
  templateUrl: './offre-stage.component.html',
  styleUrls: ['./offre-stage.component.css']
})
export class OffreStageComponent implements OnInit {
  listOffre: Offre[];
  constructor() { }

  ngOnInit(): void {
    this.listOffre = [
      {ref: 'Offre 1', entreprise: 'Ent x', etat: true, titre: 'Stage'},
      {ref: 'Offre 2', entreprise: 'Ent x', etat: true, titre: 'Stage'},
      {ref: 'Offre 3', entreprise: 'Ent x', etat: true, titre: 'Stage'},
    ];
  }

}
