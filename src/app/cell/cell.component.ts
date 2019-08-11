import {Component, Input, OnInit} from '@angular/core';
import {Cell} from '../model/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() cell: Cell;
  constructor() { }
  clicked() {
    this.cell.changeColor();
  }
  ngOnInit() {
  }

}
