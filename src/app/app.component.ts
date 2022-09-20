import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-class-one';
  paragraph = 'I like angular and all its functions';
  name: string = "Carlos"
}
