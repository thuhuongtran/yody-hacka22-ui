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

  sum = 0;
  sumStr = '';

  previousResponse: any;

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      this.previousResponse = window.history.state;
      console.log(this.previousResponse);

      let price = this.getPriceByType(this.previousResponse.shirtType);
      this.previousResponse.sizes.forEach((e: any) => {
        this.sum += price * parseInt(e.quantity);
      });

      this.sumStr = this.numberWithCommas(this.sum);
    });
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  getPriceByType(type: string) {
    switch (type) {
      case 'Polo':
        return 170000;
      case 'T-Shirt':
        return 150000;
      case 'Hoddie':
        return 165000;
      default:
        return 0;
    }
  }
}

// {
//   "shirtType": "Polo",
//   "shirtColor": "black",
//   "yourDesign": null,
//   "navigationId": 5,
//   "upsale": "standard",
//   "sizes": [
//       {
//           "id": 1,
//           "size": "mnu",
//           "quantity": "45"
//       },
//       {
//           "id": 2,
//           "size": "mnam",
//           "quantity": "12"
//       }
//   ]
// }
