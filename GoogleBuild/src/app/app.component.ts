import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Google_Build';
  todoData = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    },
  ]
}
