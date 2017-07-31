import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ Input() playerMarker: string;
  
  tiles = [
      {id: 1},
      {id: 2},
      {id: 3}
  ];

  title = 'Tic Tac Toe';

  onClick(event) {
    event.target.playerMarker = (event.target.playerMarker === 'X') ? 'O' : 'X';
  }
}

