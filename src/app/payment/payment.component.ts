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

  constructor(private route: Router, private dataRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      console.log(window.history.state);
      this.previousResponse = window.history.state;
    });
  }

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
