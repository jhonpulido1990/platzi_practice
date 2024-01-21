import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({ required: true }) imagen: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';
}
