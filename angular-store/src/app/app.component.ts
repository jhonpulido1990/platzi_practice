import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImag = true;

  onLoaded(img: string) {
    console.log('soy padre', img);
  }

  toggleImg() {
    this.showImag = !this.showImag;
  }
}
