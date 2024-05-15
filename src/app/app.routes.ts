import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductsComponent } from './new-products/new-products.component';
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:"admin",component: AdminTemplateComponent,children:[
      { path: 'products', component: ProductsComponent },
      { path: 'newProduct', component: NewProductsComponent,
        data:{requiredRoles:'ADMIN'}},
      {path:'editProduct/:id',component:EditProductComponent,
        data:{requiredRoles:'ADMIN'}
      },
      { path: 'home', component: HomeComponent },
      {path:"notAuthorized",component:NotAuthorizedComponent}

    ]},
  {path:"" , redirectTo: "/login", pathMatch:"full"}
];
