import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private dataRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      console.log(window.history.state);
    });
  }
}
