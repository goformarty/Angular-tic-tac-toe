import { BoardComponent } from './../board/board.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  movesCount() {
    return 0;
  }

  constructor() { }
}
