import { Component, OnInit } from '@angular/core';
import {Row} from '../model/row';
import {GameController} from '../model/game-controller';
import {Ship} from '../model/ship';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  rows: Row[] = [];
  constructor(gameController: GameController) {
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));
    this.rows.push(new Row(gameController));

    const ship = new Ship(4);
    this.setShip(0, 1, ship);
    this.setShip(1, 1, ship);
    this.setShip(2, 1, ship);
    this.setShip(3, 1, ship);

    const shipx = new Ship(2);
    this.setShip(3, 6, shipx);
    this.setShip(4, 6, shipx);

  }

  ngOnInit() {
  }

  setShip(x: number, y: number, ship: Ship) {
    if (y >= 0 && y < 10) {
      this.rows[y].setShip(x, ship);
    }
  }
}
