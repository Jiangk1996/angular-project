import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-first-project';
  currentCustom: String = '123';
  color = 'blue';
  obj = {
    name: 'ailiang',
  };
  getAge() {
    return 18;
  }
  changeColor(isRed: Boolean) {
    if (isRed) {
      this.color = 'red';
    }
  }
  deleteHero() {
    alert('hello');
  }
}
