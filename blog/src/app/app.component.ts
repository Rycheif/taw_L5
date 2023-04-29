import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counter: number = 0;

  public add() {
    this.counter++;
  }

  public remove() {
    this.counter--;
  }
}
