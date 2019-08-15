import {Component, Input, OnInit} from '@angular/core';
import {MyRow} from '../model/myrow';

@Component({
  selector: 'app-my-row',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit {
  @Input() myRow: MyRow;

  constructor() { }

  ngOnInit() {
  }

}
