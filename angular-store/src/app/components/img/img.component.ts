import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();

  imgDefault = "./assets/images/bom.jpg";
  imgError () {
    this.img = this.imgDefault
  }

  imagLoaded() {
    console.log('loaded');
    this.loaded.emit(this.img);
  }
}
