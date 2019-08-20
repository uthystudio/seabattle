import {Component, Input, OnInit} from '@angular/core';
import {Playercell} from '../model/playercell';
import {GameController} from '../model/game-controller';

@Component({
  selector: 'app-my-cell',
  templateUrl: './my-cell.component.html',
  styleUrls: ['./my-cell.component.css']
})
export class MyCellComponent implements OnInit {
  constructor(public gameController: GameController) { }
  @Input() myCell: Playercell;
  clicked() {
    if (this.gameController.whereToShot === 'Put your ships on the board') {
      this.myCell.changeColor();
    }
  }

  ngOnInit() {
  }
}
