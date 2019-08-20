import {Playercell} from './playercell';
import {GameController} from './game-controller';
import {MyBoardComponent} from '../player-board/my-board.component';

export class Playerrow {
  myCells: Playercell[] = [];

  constructor(gameController: GameController) {
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
    this.myCells.push(new Playercell(gameController));
  }

  botShot(xToShot) {
    this.myCells[xToShot].botShot();
  }

  changeColorToRed(x: number) {
    this.myCells[x].changeColorToRed();
  }

  checkTurn(xToShot: number) {
    return this.myCells[xToShot].checkTurn();
  }
}
