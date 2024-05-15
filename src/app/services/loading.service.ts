import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading$ = new Subject<Boolean>()
  constructor() { }
  showLoading() :void{
    this.isLoading$.next(true);
  }
  hideLoading() : void{
    this.isLoading$.next(false);
  }
}
