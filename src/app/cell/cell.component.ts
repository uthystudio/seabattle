import {Component, Input, OnInit} from '@angular/core';
import {Cell} from '../model/cell';
import {ToShotComponent} from '../to-shot/to-shot.component';
import {GameController} from '../model/game-controller';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  constructor(public gameController: GameController) { }
  @Input() cell: Cell;
  clicked() {
    if (this.gameController.whereToShot === 'X: Not, Y: Not') {
      this.cell.changeColor();
    }
  }
  ngOnInit() {
  }

}
