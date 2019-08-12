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

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const carrier = new Ship(4);
    const battleshipf = new Ship(3);
    const battleships = new Ship(3);
    const cruiserf = new Ship(2);
    const cruisers = new Ship(2);
    const cruisert = new Ship(2);
    const destroyerf = new Ship(1);
    const destroyers = new Ship(1);
    const destroyert = new Ship(1);
    const destroyere = new Ship(1);
    const i = getRandomInt(0, 10);
    if (i === 1) {
      // first
      this.setShip(0, 0, carrier);
      this.setShip(1, 0, carrier);
      this.setShip(2, 0, carrier);
      this.setShip(3, 0, carrier);

      this.setShip(0, 2, battleshipf);
      this.setShip(1, 2, battleshipf);
      this.setShip(2, 2, battleshipf);

      this.setShip(4, 2, destroyerf);

      this.setShip(6, 0, battleships);
      this.setShip(6, 1, battleships);
      this.setShip(6, 2, battleships);

      this.setShip(9, 0, cruiserf);
      this.setShip(8, 0, cruiserf);
      // end
    }
    if (i === 2) {
      // second
      this.setShip(9, 0, carrier);
      this.setShip(9, 1, carrier);
      this.setShip(9, 2, carrier);
      this.setShip(9, 3, carrier);
      // end
    }
    if (i === 3) {
      // third
      this.setShip(9, 9, carrier);
      this.setShip(8, 9, carrier);
      this.setShip(7, 9, carrier);
      this.setShip(6, 9, carrier);
      // end
    }
    if (i === 4) {
      // fourth
      this.setShip(0, 9, carrier);
      this.setShip(0, 8, carrier);
      this.setShip(0, 7, carrier);
      this.setShip(0, 6, carrier);
      // end
    }

  }

  ngOnInit() {
  }

  setShip(x: number, y: number, ship: Ship) {
    if (y >= 0 && y < 10) {
      this.rows[y].setShip(x, ship);
    }
  }
}
