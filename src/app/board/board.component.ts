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
    let cellsToShot = [...Array(100).keys()];
    cellsToShot = this.newShip(4, carrier, cellsToShot);
    cellsToShot = this.newShip(3, battleshipf, cellsToShot);
    cellsToShot = this.newShip(3, battleships, cellsToShot);
    cellsToShot = this.newShip(2, cruiserf, cellsToShot);
    cellsToShot = this.newShip(2, cruisers, cellsToShot);
    cellsToShot = this.newShip(2, cruisert, cellsToShot);
    cellsToShot = this.newShip(1, destroyerf, cellsToShot);
    cellsToShot = this.newShip(1, destroyers, cellsToShot);
    cellsToShot = this.newShip(1, destroyert, cellsToShot);
    cellsToShot = this.newShip(1, destroyere, cellsToShot);
  }

  ngOnInit() {
  }

  setShip(x: number, y: number, ship: Ship) {
    if (y >= 0 && y < 10) {
      this.rows[y].setShip(x, ship);
    }
  }

  newShip(sizeShip, idShip, cellsToShot) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let i: number;
    const a = getRandomInt(0, 7);
    const b = getRandomInt(0, 7);
    const rot = getRandomInt(1, 3);
    const helpArray = [...Array(4).keys()];
    for (i of helpArray) {
      if (rot === 1) {
        this.setShip(a, b + i, idShip);
        const ab = String(a) + String(b + i);
        delete cellsToShot[Number(ab) - 1];
      } else {
        this.setShip(a + i, b, idShip);
      }
      }
    return cellsToShot;
    }
}
