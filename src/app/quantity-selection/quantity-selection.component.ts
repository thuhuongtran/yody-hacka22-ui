import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.scss'],
})


export class QuantitySelectionComponent implements OnInit {
  constructor(private router: Router, private dataRoute: ActivatedRoute) {
    console.log(router.getCurrentNavigation()?.extras.state);
  }

  upsaleStatus: string = 'family';

  totalProducts = 0;

  products = [];

  sizes = [];

  ngOnInit(): void {
  }

  switchUpsaleStatus(status: string): void {
    this.upsaleStatus = status;
  }
}
