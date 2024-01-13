import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcom = 'todoapp';
  task = [
    'instalar angular cli',
    'crear proyecto',
    'crear componentes'
  ]
  name = 'jhon';
  eded = 30;
  estado = true;
  image = 'https://w3schools.com/howto/img_avatar.png';

  persona= {
    name: 'pepe grillo',
    edad: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola')
  }


  changeHander(event: Event) {
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

}
