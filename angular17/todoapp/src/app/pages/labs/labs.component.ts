import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcom = 'todoapp';
  task = signal([
    'instalar angular cli',
    'crear proyecto',
    'crear componentes'
  ]);
  name = signal('jhon');
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
