import {Component, Input, OnInit} from '@angular/core';
import {MyCell} from '../model/mycell';

@Component({
  selector: 'app-my-cell',
  templateUrl: './my-cell.component.html',
  styleUrls: ['./my-cell.component.css']
})
export class MyCellComponent implements OnInit {
  @Input() myCell: MyCell;

  putShip(size, id) {
    let i: number;
    for (i = 1; i < size; i ++) {
      console.log(i);
    }
  }
  ngOnInit() {
  }

}
