import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TestBoardComponent } from './test-board/test-board.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TestBoardComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
