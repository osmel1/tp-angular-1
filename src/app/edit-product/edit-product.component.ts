import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products.service";
import {AppStateService} from "../services/app-state.service";
import {Product} from "../model/product.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  public productId!: number;
  productFormGroup!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductsService,
    private fm: FormBuilder,
    public appState: AppStateService
  ) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.ps.getProductById(this.productId).subscribe({
      next: (product) => {
        this.productFormGroup = this.fm.group({
          id: this.fm.control(product.id),
          name: this.fm.control(product.name, [Validators.required]),
          price: this.fm.control(product.price),
          checked: this.fm.control(product.checked),
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  updateProduct() {
    this.appState.setProductsState({ status: 'LOADING' });
    let product: Product = this.productFormGroup.value;
    this.ps.updateProduct(product).subscribe({
      next: (data) => {
        alert(JSON.stringify(data));
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
