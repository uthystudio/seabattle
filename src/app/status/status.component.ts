import { Component, OnInit } from '@angular/core';
import {GameController} from '../model/game-controller';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  constructor(public gameController: GameController) { }

  ngOnInit() {
  }

}
