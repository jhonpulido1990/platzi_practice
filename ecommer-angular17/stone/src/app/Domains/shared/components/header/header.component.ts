import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({ required: true }) cart: Product[] = [];
  hideSideMenu = signal(true);

  toogleSideMenu () {
    this.hideSideMenu.update(prestate => !prestate)
  }
}
