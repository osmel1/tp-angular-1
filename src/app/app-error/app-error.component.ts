import { Component } from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-app-error',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './app-error.component.html',
  styleUrl: './app-error.component.css'
})
export class AppErrorComponent {
  showError : boolean = false;
  constructor(public appState: AppStateService){

  }
}
