import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ProductsService} from "../services/products.service";
import {AppStateService} from "../services/app-state.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent implements OnInit{
  public productForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private ps: ProductsService,
    public appState: AppStateService
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      price: this.fb.control(0),
      checked: this.fb.control(false),
    });
  }
  saveProduct() {
    this.appState.setProductsState({ status: 'LOADING' });
    let product: Product = this.productForm.value;
    this.ps.saveProduct(product).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
        this.appState.setProductsState({ status: 'LOADED' });
      },
      error: (error) => {
        console.log(error);
        this.appState.setProductsState({
          status: 'ERROR',
          errorMessage: error,
        });
      },
    });
  }
}
