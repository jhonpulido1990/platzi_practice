import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'el mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'collecion de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      id: '5',
      name: 'casa para perros',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      id: '6',
      name: 'gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ];

  constructor(private storeService: StoreService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal()
  }
}
