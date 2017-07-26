import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  isX: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isX = !this.isX;
  }
}
