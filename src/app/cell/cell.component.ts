import { Component } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  row: number; // 0 1 2
  column: number; // 0 1 2
  state: string; // "X" | "O" | "E"
  constructor() { }

}
