import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService]
})

export class AppComponent implements OnInit {
  title = 'Tic Tac Toe';
  board: any;
  lock = false;

  constructor(public gs: GameService) { }
  ngOnInit() {
    // this.board = this.gameService.initBoard();
  }

  newGame() {
    this.gs.freeTilesRemaining = 9;
    this.gs.initBoard();
    this.lock = false;
    this.gs.turn = 0;
  }

  playerClick(i) {

  }
}

