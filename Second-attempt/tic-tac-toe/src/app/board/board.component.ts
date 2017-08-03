import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  
  private grid: Array<any> = [];
  // constructor(private grid: array<any> = ['', '', '', '', '', '', '', '', '']) { }
  // constructor(private grid: Array<any>) { }

  isEmpty(): boolean {
    return true;
  }

  placeMark(mark: string, position: Number) {
   //   
  }

  // position(boardPosition: number): string {
  //   return this.grid[ (boardPosition - 1)];
  // }

}
