import {Component} from '@angular/core';
import {GameService} from './model/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(gameService: GameService) {
    gameService.startGame();
  }

}
