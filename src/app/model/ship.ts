import {isBoolean} from 'util';

export class Ship {
  // Количество подбитых клеток
  private shotCells: number;

  constructor(private size: number) {
    this.shotCells = 0;
  }
  shooted() {
    this.shotCells++;
  }
  isKilled() {
    return this.size === this.shotCells;
  }
}
