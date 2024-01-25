import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductsComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProduct: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 100,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 100,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 100,
        image: 'https://picsum.photos/640/640?r=26',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=27',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 6',
        price: 100,
        image: 'https://picsum.photos/640/640?r=28',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProduct);
  }

  addCart(product: Product) {
    this.cart.update(preView => [...preView, product])
  }
}
