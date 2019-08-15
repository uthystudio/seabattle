import { Component, OnInit } from '@angular/core';
import {GameController} from '../model/game-controller';
import {MyRow} from '../model/myrow';

@Component({
  selector: 'app-my-board',
  templateUrl: './my-board.component.html',
  styleUrls: ['./my-board.component.css']
})
export class MyBoardComponent implements OnInit {

  constructor(gameController: GameController) {
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
    this.myRows.push(new MyRow(gameController));
  }
  myRows: MyRow[] = [];
  ngOnInit() {
  }

}
