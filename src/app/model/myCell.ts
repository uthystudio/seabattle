import {GameController} from './game-controller';

enum myCellStates {
  NONE = 'white',
  SHOT = 'green',
  MISSED = 'red',
  SHIPPEDBYPLAYER = 'black'
}
export class MyCell {
  bgColor: string;
  constructor(private gameController: GameController) {
    this.bgColor = myCellStates.NONE;
  }
}
