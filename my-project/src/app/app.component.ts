import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'jhon';
  age = 30;
  img = 'https://avatars.githubusercontent.com/u/2975064?s=200&v=4';
  btnDisabled = true;
  Person = {
    name: 'jhon',
    age: 30,
    img: 'https://avatars.githubusercontent.com/u/2975064?s=200&v=4'
  }

  names :string[] = ['pablo', 'pedro', 'david'];

  newName = '';

  box = {
    width: 100,
    heigth: 100,
    background: 'red'
  }

  products: Product[] = [
    {
      name: 'el mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      name: 'bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'collecion de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'casa para perros',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

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

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
