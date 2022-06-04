import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.scss'],
})


export class QuantitySelectionComponent implements OnInit {
  constructor() {}

  upsaleStatus: string = 'family';

  totalProducts = 0;

  products = [];

  sizes = [];

  ngOnInit(): void {}

  switchUpsaleStatus(status: string): void {
    this.upsaleStatus = status;
  }
}
