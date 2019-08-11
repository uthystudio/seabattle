import {GameController} from './game-controller';
import {tick} from '@angular/core/testing';

enum CellStates {
  NONE = 'white',
  SHIPPED = 1,
  SHOT = 'green',
  MISSED = 'red'
}

export class Cell {
  bgColor: CellStates;

  constructor(private gameController: GameController) {
    this.bgColor = CellStates.NONE;
  }

  async changeColor() {
    if (this.bgColor === CellStates.SHIPPED) {
      this.bgColor = CellStates.SHOT;
      this.gameController.shooted();
      setTimeout(() => this.gameController.yourTurn(), 900);
    }
    if (this.bgColor === CellStates.NONE) {
      this.bgColor = CellStates.MISSED;
      this.gameController.missed();
      setTimeout(() => this.gameController.yourTurn(), 900);
    }
  }

  setShip() {
    this.bgColor = CellStates.SHIPPED;
  }
}
