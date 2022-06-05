import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstCorePageComponent } from './first-core-page/first-core-page.component';
import { DesignCardComponent } from './design-card/design-card.component';
import { QuantitySelectionComponent } from './quantity-selection/quantity-selection.component';
import { ChooseDesignDecorComponent } from './choose-design-decor/choose-design-decor.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentCardItemComponent } from './payment-card-item/payment-card-item.component';
import {HttpClientModule} from "@angular/common/http";
import {AngularDraggableModule} from "angular2-draggable";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstCorePageComponent,
    DesignCardComponent,
    QuantitySelectionComponent,
    ChooseDesignDecorComponent,
    CartComponent,
    CartItemComponent,
    PaymentComponent,
    PaymentCardItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
