import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private dataRoute: ActivatedRoute) {}

  products = [];

  previousResponse: any;

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      this.previousResponse = window.history.state;
    });
  }
}

/*
{
    "orderDate": "2022-06-04",
    "customerId": "1",
    "paymentMethod": "CARD",
    "shippingFee": 20000,
    "totalCost": 1000000,
    "orderItemList": [
        {
            "designShirt" : {
                "id" : 1,
                "title" : "Camnoup",
                "templateShirt":{
                    "id" : "1",
                    "type" : "POLO",
                    "color" : "BLUE",
                    "templateImageLink" : "https://bizweb.sapocdn.net/100/438/408/products/tsm5231-den-4.jpg?v=1652520442737",
                     "size": "S"                },
                "design": {
                  "image": "base",
                  ""
                },
                "type" : "buydesign",
                 "image" : 
            },
            "price":1000000,
            "count" : 10
        }
    ]
}
*/