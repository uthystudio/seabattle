import {Component, Injectable, OnInit} from '@angular/core';
import {Row} from '../model/row';
import {GameController} from '../model/game-controller';
import {Ship} from '../model/ship';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class BoardComponent implements OnInit {

  isCellHere: boolean;
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
    this.newShip(4, carrier);
    this.newShip(3, battleshipf);
    this.newShip(3, battleships);
    this.newShip(2, cruiserf);
    this.newShip(2, cruisers);
    this.newShip(2, cruisert);
    this.newShip(1, destroyerf);
    this.newShip(1, destroyers);
    this.newShip(1, destroyert);
    this.newShip(1, destroyere);
  }
  rows: Row[] = [];

  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
  }
  setShip(x: number, y: number, ship: Ship) {
    if (y >= 0 && y < 10) {
      this.rows[y].setShip(x, ship);
    }
  }

  isCellFreeHelpFunction(x: number, y: number) {
    if (y >= 0 && y < 10) {
      return this.rows[y].isCellFree(x);
    } else {
      return false;
    }
  }
  isCellFree(x: number, y: number) {
    if (y >= 0 && y < 10) {
      // tslint:disable-next-line:max-line-length
      this.isCellHere = this.rows[y].isCellFree(x) && this.isCellFreeHelpFunction(x + 1, y) && this.isCellFreeHelpFunction(x + 1, y - 1) && this.isCellFreeHelpFunction(x, y - 1) && this.isCellFreeHelpFunction(x, y + 1) && this.isCellFreeHelpFunction(x + 1, y + 1) && this.isCellFreeHelpFunction(x - 1, y + 1) && this.isCellFreeHelpFunction(x - 1, y) && this.isCellFreeHelpFunction(x - 1, y - 1);
      return this.isCellHere;
    } else {
      return false;
    }
  }

  putShipIntoCells(x: number, y: number, idShip, sizeShip, rot) {
    let i: number;
    const helpArray = [...Array(sizeShip).keys()];
    if (rot === 1) {
      for (i of helpArray) {
        this.setShip(x + i, y, idShip);
      }
    } else {
      for (i of helpArray) {
        this.setShip(x, y + i, idShip);
      }
    }
  }

  newShip(sizeShip, idShip) {
    let i: number;
    const x = BoardComponent.getRandomInt(0, 10);
    const y = BoardComponent.getRandomInt(0, 10);
    let isGoodToPutShip = 0;
    const rot = BoardComponent.getRandomInt(1, 3);
    const helpArray = [...Array(sizeShip).keys()];
    if (rot === 1) {
      for (i of helpArray) {
        if (this.isCellFree(x + i, y)) {
          isGoodToPutShip ++;
        }
      }
    } else {
      for (i of helpArray) {
        if (this.isCellFree(x, y + i)) {
          isGoodToPutShip ++;
        }
      }
    }

    try {
      if (isGoodToPutShip >= sizeShip) {
        this.putShipIntoCells(x, y, idShip, sizeShip, rot);
      } else {
        this.newShip(sizeShip, idShip);
      }
    } catch (e) {
      console.log('Something happened, try again!');
    }
  }
}
