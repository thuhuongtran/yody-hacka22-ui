import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  defaultChoice: string = '';

  previousResponse: any;
  sum = 0;
  sumStr = '';
  constructor(private route: Router, private dataRoute: ActivatedRoute) {}

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

  emitChoice(choice: string) {
    this.defaultChoice = choice;
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

  save() {
    Swal.fire({
      icon: 'success',
      title: 'Thành công',
      html: '<span>Đặt hàng thành công!</span>',
      showConfirmButton: true,
    }).then((result) => {
      this.route.navigate(['/']);
    });
  }
}
