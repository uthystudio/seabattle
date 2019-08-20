import {Component, Injectable, OnInit} from '@angular/core';
import {GameController} from '../model/game-controller';
import {Playerrow} from '../model/playerrow';

@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.css']
})
@Injectable({providedIn: 'root'})
export class MyBoardComponent implements OnInit {

  constructor(private gameController: GameController) {
    gameController.setMyBoardComponent(this);
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
    this.myRows.push(new Playerrow(gameController));
  }
  myRows: Playerrow[] = [];

  changeColorToRed(x: number, y: number) {
    this.myRows[y].botShot(x);
  }
  // changeColorToRed(x: number, y: number) {
  // tslint:disable-next-line:max-line-length
  //   this.myRows[y].changeColorToRed(x) && this.myRows[y].changeColorToRed(x + 1, y) && this.myRows[y].changeColorToRed(x + 1, y - 1) && this.myRows[y].changeColorToRed(x, y - 1) && this.myRows[y].changeColorToRed(x, y + 1) && this.myRows[y].changeColorToRed(x + 1, y + 1) && this.myRows[y].changeColorToRed(x - 1, y + 1) && this.myRows[y].changeColorToRed(x - 1, y) && this.myRows[y].changeColorToRed(x - 1, y - 1);
  // }
  ngOnInit() {
  }

  botTurn(xToShot: number, yToShot: number) {
    this.myRows[yToShot].botShot(xToShot);
  }

  checkTurn(xToShot: number, yToShot: number) {
    return this.myRows[yToShot].checkTurn(xToShot);
  }
}
