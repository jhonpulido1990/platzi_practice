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
}
