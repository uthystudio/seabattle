import {GameController} from './game-controller';
import {tick} from '@angular/core/testing';
import {Ship} from './ship';

enum CellStates {
  NONE = 'white',
  SHIPPED = 1,
  SHOT = 'green',
  MISSED = 'red'
}

export class Cell {
  bgColor: CellStates;
  ship: Ship;

  constructor(private gameController: GameController) {
    this.bgColor = CellStates.NONE;
  }

  async changeColor() {
    if (this.bgColor === CellStates.SHIPPED) {
      this.ship.shooted();
      this.bgColor = CellStates.SHOT;
      this.gameController.shooted(this.ship.isKilled());
      setTimeout(() => this.gameController.yourturn(), 900);
    }
    if (this.bgColor === CellStates.NONE) {
      this.bgColor = CellStates.MISSED;
      this.gameController.missed();
      setTimeout(() => this.gameController.yourturn(), 900);
    }
  }

  setShip(ship: Ship) {
    this.bgColor = CellStates.SHIPPED;
    this.ship = ship;
  }

  isCellFree() {
    return this.bgColor !== CellStates.SHIPPED;
  }
}
