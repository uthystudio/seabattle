import {Cell} from './cell';
import {GameController} from './game-controller';

export class Row {
  cells: Cell[] = [];

  constructor(gameController: GameController) {
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
    this.cells.push(new Cell(gameController));
  }

  setShip(x: number) {
    if (x >= 0 && x < 10) {
      this.cells[x].setShip();
    }
  }
}
