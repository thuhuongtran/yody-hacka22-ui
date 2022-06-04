import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FirstCorePageComponent } from './first-core-page/first-core-page.component';
import { PaymentComponent } from './payment/payment.component';
import { QuantitySelectionComponent } from './quantity-selection/quantity-selection.component';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'quantity-selection',
    component: QuantitySelectionComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    component: FirstCorePageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// response -> url front-end
