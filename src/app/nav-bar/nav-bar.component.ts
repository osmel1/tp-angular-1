import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {LoadingService} from "../services/loading.service";
import {Router, RouterLink} from "@angular/router";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  actions: Array<any> = [
    { title: 'Home', route: 'home', icon: 'house' },
    { title: 'Products', route: '/admin/products', icon: 'search' },
    { title: 'New Product', route: '/admin/newProduct', icon: 'bag-plus' },
  ];
  //public isLoading : boolean = false;
  currentActions: any;

  constructor(public appState: AppStateService, public ls: LoadingService, private router:Router) {}
  setCurrentAction(action: any) {
    this.currentActions = action;
  }
  Login() {
    this.router.navigateByUrl("/login");
  }
  logout() {
    this.appState.authState={};
    this.router.navigateByUrl("/login");
  }
}
