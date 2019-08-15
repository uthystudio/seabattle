enum GameStatus {
  Started = 1,
  AfterShipsPutting = 2,
  End = 0
}
export class GameService {
  gameStatus: GameStatus;
  startGame() {
    this.gameStatus = GameStatus.Started;
  }
  endOfShipsPutting() {
    this.gameStatus = GameStatus.AfterShipsPutting;
  }
  endGame() {
    this.gameStatus = GameStatus.End;
  }
  constructor() { }
}
