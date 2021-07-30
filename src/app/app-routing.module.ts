import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SellComponent } from './sell/sell.component';
import { ViewComponent } from './view/view.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'profile',component:ProfileComponent},
  { path: 'login',component:LoginComponent},
  { path: 'sell',component:SellComponent},
  { path: 'view',component:ViewComponent},
  { path: 'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
