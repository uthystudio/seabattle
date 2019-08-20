import {Injectable, Input} from '@angular/core';
import {MyBoardComponent} from '../player-board/my-board.component';

@Injectable({
  providedIn: 'root',
  })
export class GameController {
  constructor() {
    this.gameStatus = 0;
    this.puttedCells = 0;
    this.puttingShips();
  }
  myBoardComponent: MyBoardComponent;
  puttedCells: number;
  gameStatus: number;
  message: string;
  whereToShot = 'X: Not, Y: Not';
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  puttingShips() {
    this.whereToShot = 'Put your ships on the board';
    this.message = '>> Put you ships!';
}
  yourturn() {
    this.whereToShot = 'X: Not, Y: Not';
    this.gameStatus = 1;
    this.message = '>> Your Turn!';
  }
  shooted(isKilled: boolean) {
    if (isKilled === true) {
      this.message = '>> Killed!';
    } else {
      this.message = '>>> Shooted!';
    }
  }
  missed() {
    this.message = '>> Missed!';
  }
  botTurn() {
      const xToShot = GameController.getRandomInt(0, 10);
      const yToShot = GameController.getRandomInt(0, 10);
      if (this.myBoardComponent.checkTurn(xToShot, yToShot)) {
        this.botTurn();
      } else {
        this.myBoardComponent.botTurn(xToShot, yToShot);
      }
      this.message = '>> Mark the coordinates on your field';
      this.whereToShot = 'X: ' + String(xToShot + 1) + ', Y: ' + String(yToShot + 1);
      this.yourturn();
  }

  setMyBoardComponent(myBoardComponent: MyBoardComponent) {
    this.myBoardComponent = myBoardComponent;
  }
}
