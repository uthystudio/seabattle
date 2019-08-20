import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { StatusComponent } from './status/status.component';
import { ToShotComponent } from './to-shot/to-shot.component';
import { MyBoardComponent } from './player-board/my-board.component';
import { MyRowComponent } from './player-row/my-row.component';
import { MyCellComponent } from './player-cell/my-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    CellComponent,
    BoardComponent,
    StatusComponent,
    ToShotComponent,
    MyBoardComponent,
    MyRowComponent,
    MyCellComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
