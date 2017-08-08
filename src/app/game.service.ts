import { Injectable } from '@angular/core';
import { TileComponent } from './tile/tile.component';

@Injectable()
export class GameService {

  players = ['X', 'O'];
  turn = 0;

  tiles = [];
  freeTilesRemaining = 9;

  constructor() {
    this.initBoard();
   }

  initBoard() {
    this.tiles = [];
    for (let i = 0; i <= 8; i++) {
      // tslint:disable-next-line:prefer-const
      let tile = new TileComponent();
      tile.isEmpty = true;
      tile.playerMarker = '';

      this.tiles.push(tile);
    }
    return this.tiles;
  }

  changeTurn() {
    if ( this.turn === 1 ) {
      this.turn = 0;
    } else {
      this.turn = 1;
    }
    return this.turn;
  }

}
