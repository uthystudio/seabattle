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
    this.message = '>> Ваш ход!';
  }
  shooted(isKilled: boolean) {
    if (isKilled === true) {
      this.message = '>> Убил!';
    } else {
      this.message = '>>> Попал!';
    }
  }
  missed() {
    this.message = '>> Промахнулся!';
  }
  botTurn() {
    const xToShot = GameController.getRandomInt(1, 11);
    const yToShot = GameController.getRandomInt(1, 11);
    this.message = '>> Отметьте координаты на вашем поле.';
    this.whereToShot = 'X: ' + String(xToShot) + ', Y: ' + String(yToShot);
  }
}
