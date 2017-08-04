import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent {

  size = 9;
  private grid: Array<any> = new Array<any>(this.size);

  constructor() { }

  isEmpty(): boolean {
   const gridClone: any[] = this.grid;
   for (let i = 0; i < this.size; i++) {
     if (gridClone[i] !== undefined) {
       gridClone.splice(i, 1);
     }
    if (gridClone.length === 9) {
      return true;
    } else {
      return false;
    }
   }

   return (this.grid.length > 0) ? false : true;
  }

  placeMark(mark: string, position: number) {
   this.grid[(position - 1)] = mark;
  }

  position(boardPosition: number): string {
    return this.grid[ (boardPosition - 1)];
  }
}
