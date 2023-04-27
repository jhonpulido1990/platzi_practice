import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImag = true;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  onLoaded(img: string) {
    console.log('soy padre', img);
  }

  toggleImg() {
    this.showImag = !this.showImag;
  }

  createUser() {
    this.usersService.create({
      name: "andres1",
      email: "andres1@mail.com",
      password: "1212"})
    .subscribe(rta => {
      console.log(rta)
    })
  }

  login() {
    this.authService.login("andres1@mail.com", "1212")
    .subscribe(rta => {
      console.log(rta.access_token)
    })
  }

}
