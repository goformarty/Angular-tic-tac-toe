import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  marker = 'X';

  playerClicked() {
    console.log('clicked');
  }

 //  onInit(){
 //    this.startNewGame();
 //  }
 //
 // startNewGame() {
 //
 // }
}
