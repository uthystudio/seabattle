import {GameController} from './game-controller';
import {MyBoardComponent} from '../player-board/my-board.component';

enum myCellStates {
  SHIPPEDBYPLAYER = 'black',
  NONE = 'white',
  SHOOTED = 'green',
  MISSED = 'red'
}

export class Playercell {

  constructor(private gameController: GameController) {
    this.bgColor = myCellStates.NONE;
  }
  bgColor: myCellStates;

  changeColor() {
    if (this.gameController.gameStatus === 0) {
      if (this.gameController.puttedCells !== 19) {
        if (this.bgColor !== myCellStates.SHIPPEDBYPLAYER) {
          this.bgColor = myCellStates.SHIPPEDBYPLAYER;
          this.gameController.puttedCells ++;
        }
      } else {
        this.bgColor = myCellStates.SHIPPEDBYPLAYER;
        this.gameController.gameStatus = 1;
        this.gameController.whereToShot = 'X: Not, Y: Not';
        this.gameController.message = '>> Your Turn!';
      }
    }
  }

  botShot() {
    if (this.bgColor === myCellStates.SHIPPEDBYPLAYER) {
      this.bgColor = myCellStates.SHOOTED;
    } else {
      this.bgColor = myCellStates.MISSED;
    }
  }

  changeColorToRed() {
    this.bgColor = myCellStates.MISSED;
  }

  checkTurn() {
    if (this.bgColor === myCellStates.MISSED || this.bgColor === myCellStates.SHOOTED) {
      return true;
    } else {
      return false;
    }
  }
}
