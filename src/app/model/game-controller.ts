import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
  })
export class GameController {
  message: string;
  constructor() {
    this.yourturn();
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
  killed() {
    this.message = '>> Убил!';
  }
}
