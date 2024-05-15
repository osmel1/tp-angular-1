import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private host :string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  public checkProduct(product: Product): Observable<any> {

    return this.http.patch<Product>(
      `${this.host}/${product.id}`,
      { checked: !product.checked }
    );
  }
  public deleteProduct(product: Product) {
    return this.http.delete<any>(
      `${this.host}/${product.id}`
    );
  }
  public saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.host}`, product);
  }

  public getProducts(keyword: string = '') {
    return this.http.get<any>(
      `${this.host}?q=${keyword}`,
      { observe: 'response'}
    );
  }
  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.host}`);
  }

  getProductById(productId: number) {
    return this.http.get<Product>(
      `${this.host}/${productId}`
    );
  }
  updateProduct(product: Product):Observable<Product> {
    return this.http.put<Product>(
      `${this.host}/${product.id}`,
      product
    );

  }
}
