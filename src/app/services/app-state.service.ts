import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productsState: any = {
    product: [],
    keyword: '',
    totalProducts: 0,
    totalPages: 0,
    pageSize: 3,
    currentPage: 1,
    status: 'LOADED',
    errorMessage: '',
  };
  public authState : any = {
    isAuhtenticated : false,
    username : undefined,
    roles : undefined,
    token: undefined
  }

  constructor() {}
  public setProductsState(state: any) {
    console.log(state);
    this.productsState = { ...this.productsState, ...state };
  }
  public setAuthState(state : any){
    this.authState= {...this.authState, ...state};
  }
}
