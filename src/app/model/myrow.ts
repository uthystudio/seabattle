import {MyCell} from './mycell';
import {GameController} from './game-controller';

export class MyRow {
  myCells: MyCell[] = [];

  constructor(gameController: GameController) {
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
    this.myCells.push(new MyCell(gameController));
  }
}
