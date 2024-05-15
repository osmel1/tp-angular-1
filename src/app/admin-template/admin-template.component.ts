import { Component } from '@angular/core';
import {AppErrorComponent} from "../app-error/app-error.component";
import {RouterOutlet} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [
    AppErrorComponent,
    RouterOutlet,
    DashboardComponent,
    NavBarComponent
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
