import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
  })
export class GameController {
  constructor() {
    this.yourturn();
  }
  message: string;
  whereToShot = 'X: Not, Y: Not';
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  yourturn() {
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
    const xToShot = GameController.getRandomInt(1, 11);
    const yToShot = GameController.getRandomInt(1, 11);
    this.message = '>> Mark the coordinates on your field';
    this.whereToShot = 'X: ' + String(xToShot) + ', Y: ' + String(yToShot);
  }
}
