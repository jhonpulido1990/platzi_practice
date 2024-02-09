import { Routes } from '@angular/router';
import { ListComponent } from './Domains/products/pages/list/list.component';
import { AboutComponent } from './Domains/info/pages/about/about.component';
import { NotFoundComponent } from './Domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
