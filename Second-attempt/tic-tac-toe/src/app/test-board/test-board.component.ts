import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-board',
  templateUrl: './test-board.component.html',
  styleUrls: ['./test-board.component.css']
})
export class TestBoardComponent implements OnInit {

  board = [];

  isEmpty() {
    return true;
  }

  placeMark(mark: string, position: number) {

  }

  // constructor( board = ['', '', '']) {
  //   this.board = board;
  // }

  ngOnInit() {
  }

}
