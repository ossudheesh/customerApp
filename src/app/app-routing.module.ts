import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'customers',component:CustomersComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'orders',component:OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
