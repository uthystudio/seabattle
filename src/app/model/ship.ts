export class Ship {
  // Количество подбитых клеток
  private shotCells: number;

  constructor(private size: number) {
    this.shotCells = 0;
  }
  shooted() {
    this.shotCells++;
  }
  isKilled() {
    // if (this.size === this.shotCells) {
    //   Cell.changeColorToRed();
    // }
    return this.size === this.shotCells;
  }
}
