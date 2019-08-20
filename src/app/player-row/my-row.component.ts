import {Component, Input, OnInit} from '@angular/core';
import {Playerrow} from '../model/playerrow';

@Component({
  selector: 'app-my-row',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit {
  @Input() myRow: Playerrow;

  constructor() { }

  ngOnInit() {
  }

}
