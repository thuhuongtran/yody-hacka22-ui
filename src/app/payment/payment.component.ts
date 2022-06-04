import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  defaultChoice: string = '';

  constructor() {}

  ngOnInit(): void {}

  emitChoice(choice: string) {
    this.defaultChoice = choice;
  }
}
