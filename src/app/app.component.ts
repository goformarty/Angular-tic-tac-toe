import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];



  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  };

  viewMode = "map";

  onAdd() {
    this.courses.push({id: 4, name: 'course4'});
  }

  onChange(course) {
    course.name = "Updated";
    }
  }

 //  onInit(){
 //    this.startNewGame();
 //  }
 //
 // startNewGame() {
 //
 // }

