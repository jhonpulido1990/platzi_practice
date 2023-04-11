import { Component, Input, Output, EventEmitter, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img)
    // code
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();

  imgDefault = "./assets/images/bom.jpg";
/*   counter = 0;
  counterFn: number | undefined; */

  constructor() {
    // before render
    // NO async -- one time
    console.log('constructor', 'imgValue =>', this.img)
  }

  ngOnChanges(changes: SimpleChanges) {
    // before - during render
    // change inputs -- times
    console.log('ngOnChange', 'imgValue =>', this.img);
    console.log('changes: ', changes)
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- one time
/*     console.log('ngOnInit', 'imgValue =>', this.img);
    this.counterFn = window.setInterval(() => {
      this.counter++;
      console.log('run counter')
    }, 1000) */
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy')
    /* window.clearInterval(this.counterFn) */
  }

  imgError () {
    this.img = this.imgDefault
  }

  imagLoaded() {
    console.log('loaded');
    this.loaded.emit(this.img);
  }
}
