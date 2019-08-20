import {Cell} from './cell';
import {GameController} from './game-controller';
import {Ship} from './ship';
import {MyBoardComponent} from '../player-board/my-board.component';

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

  setShip(x: number, ship: Ship) {
    if (x >= 0 && x < 10) {
      this.cells[x].setShip(ship);
    }
  }

  isCellFree(x: number) {
    if (x >= 0 && x < 10) {
      return this.cells[x].isCellFree();
    } else {
      return false;
    }
  }
}
