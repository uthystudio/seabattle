import {GameController} from './game-controller';
import {Ship} from './ship';
import {Playercell} from './playercell';
import {MyBoardComponent} from '../player-board/my-board.component';
import {Input} from '@angular/core';

enum CellStates {
  NONE = 'white',
  SHIPPED = '#fff',
  SHOT = 'green',
  MISSED = 'red'
}

export class Cell {
  myBoardComponent: MyBoardComponent;
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
      setTimeout(() => this.gameController.botTurn(), 900);
    }
  }

  setShip(ship: Ship) {
    this.bgColor = CellStates.SHIPPED;
    this.ship = ship;
  }

  isCellFree() {
    return this.bgColor !== CellStates.SHIPPED;
  }
  changeColorToRed() {
    this.bgColor = CellStates.MISSED;
  }
}
