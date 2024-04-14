import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  public products: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.http.get('http://localhost:3000/products').subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}
