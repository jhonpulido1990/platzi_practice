import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCard = new EventEmitter();


  addToCardHandler() {
    this.addToCard.emit(this.product);
  }
}
