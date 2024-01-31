import { CartService } from '@shared/service/cart.service';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductsComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products = signal<Product[]>([]);
  cartService = inject(CartService)
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }

  addCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
