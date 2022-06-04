import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  defaultChoice: string = '';

  constructor(private route: Router) {}

  ngOnInit(): void {}

  emitChoice(choice: string) {
    this.defaultChoice = choice;
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
