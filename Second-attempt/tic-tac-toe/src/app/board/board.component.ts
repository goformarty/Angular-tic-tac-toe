import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {

  private size = 9;
  private grid: Array<any> = new Array<any>(this.size);

  constructor() { }

  isBoardEmpty(): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.grid[i] !== undefined) {
        return false;
      }
    }
    return true;
  }

  placeMark(mark: string, position: number) {
    if (this.isValidMove(position)) {
      this.grid[(position - 1)] = mark;
    }
  }

  position(boardPosition: number): string {
    return this.grid[(boardPosition - 1)];
  }

  private isValidMove(position: number): boolean {
    return this.isValidRange(position) && this.isPositionEmpty(position);
  }

  private isPositionEmpty(position: number): boolean {
    return (this.grid[position - 1] === undefined);
  }

  private isValidRange(position: number): boolean {
    return (position >= 1 && position <= 9);
  }
}
