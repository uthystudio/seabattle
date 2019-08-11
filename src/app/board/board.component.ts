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
  ships: Ship[] = [];
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

    this.ships.push({id: 1, size: 4, shotCells: 0});
    this.setShip(0, 1);
    this.setShip(1, 1);
    this.setShip(2, 1);
    this.setShip(3, 1);

    this.ships.push({id: 2, size: 3, shotCells: 0});
    this.setShip(5, 0);
    this.setShip(5, 1);
    this.setShip(5, 2);

  }

  ngOnInit() {
  }

  setShip(x: number, y: number) {
    if (y >= 0 && y < 10) {
      this.rows[y].setShip(x);
    }
  }
}
