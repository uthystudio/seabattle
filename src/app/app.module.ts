import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { StatusComponent } from './status/status.component';
import { ToShotComponent } from './to-shot/to-shot.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    CellComponent,
    BoardComponent,
    StatusComponent,
    ToShotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
