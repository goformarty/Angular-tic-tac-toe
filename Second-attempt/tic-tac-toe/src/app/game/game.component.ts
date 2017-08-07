import { BoardComponent } from './../board/board.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private movesCount = 0;
  currentPlayer() {
    return 'X';
  }
  constructor() { }

  ngOnInit() {
  }

}
