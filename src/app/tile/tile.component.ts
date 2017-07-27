import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  isX: boolean;
  textContent: string;
  playerMarker = ' ';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.textContent = 'O';
  }
}
