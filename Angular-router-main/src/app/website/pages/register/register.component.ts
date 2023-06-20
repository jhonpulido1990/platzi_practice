import { Component } from '@angular/core';
import { onExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements onExit {

  onExit() {
    const rta = confirm('Logica desde componente');
    return rta;
  }
}
