import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'jhon';
  age = 30;
  img = 'https://avatars.githubusercontent.com/u/2975064?s=200&v=4';
  btnDisabled = true;
  Person = {
    name: 'jhon',
    age: 30,
    img: 'https://avatars.githubusercontent.com/u/2975064?s=200&v=4'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.Person.age++
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value
  }
}
