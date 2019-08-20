import { Component, OnInit } from '@angular/core';
import {GameController} from '../model/game-controller';

@Component({
  selector: 'app-to-shot',
  templateUrl: './to-shot.component.html',
  styleUrls: ['./to-shot.component.css']
})
export class ToShotComponent implements OnInit {
  constructor(public gameController: GameController) { }
  ngOnInit() {
  }

}
