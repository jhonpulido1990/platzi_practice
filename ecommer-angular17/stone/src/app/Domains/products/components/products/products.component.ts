import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe],
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
