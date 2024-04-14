import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HomeComponent,
    ProductsComponent,
    NewProductsComponent,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  setCurrentAction(action: any) {
    this.currentAction = action;
  }
  title = 'tp-angular';
  actions: Array<any> = [
    { title: 'Home', path: '/', icon: 'house' },
    { title: 'Products', path: '/products', icon: 'arrow-down-up' },
    { title: 'New Product', path: '/newProduct', icon: 'plus-circle' },
  ];
  currentAction: any;
  constructor() {

  }
}
