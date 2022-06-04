import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstCorePageComponent } from './first-core-page/first-core-page.component';
import { DesignCardComponent } from './design-card/design-card.component';
import { QuantitySelectionComponent } from './quantity-selection/quantity-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstCorePageComponent,
    DesignCardComponent,
    QuantitySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
