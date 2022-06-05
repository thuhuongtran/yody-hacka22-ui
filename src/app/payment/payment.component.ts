import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { YodyServiceService } from '../yody-service.service';

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

  monthRange = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  yearRange = this.numberRange(1960, 2050);

  cities: any;
  districts: any;
  wards: any;

  selectedCity: string = '';
  selectedDistrict: string = '';
  selectedWard: string = '';

  fullName: string = '';
  gender: string = 'male';
  email: string = '';
  phone: string = '';
  cardNumber: string = '';
  cvc: string = '';
  holder: string = '';
  exp_month: string = '';
  exp_year: any = '';

  constructor(
    private dataRoute: ActivatedRoute,
    private yodyService: YodyServiceService
  ) {}

  ngOnInit(): void {
    this.yodyService.searchCities().subscribe((result) => {
      this.cities = result;
    });

    this.yodyService.searchDistricts().subscribe((result) => {
      this.districts = result;
    });

    this.yodyService.searchWards().subscribe((result) => {
      this.wards = result;
    });

    this.dataRoute.paramMap.subscribe(() => {
      this.previousResponse = window.history.state;
      console.log(this.previousResponse);

      let price = this.getPriceByType(this.previousResponse.shirtType);
      this.previousResponse.sizes.forEach((e: any) => {
        this.sum += price * parseInt(e.quantity);
      });

      this.sumStr = this.numberWithCommas(this.sum + 32000);
    });
  }

  numberRange(start: any, end: any) {
    return new Array(end - start).fill(undefined).map((d, i) => i + start);
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
      case 'T-shirt':
        return 150000;
      case 'Hoddie':
        return 165000;
      default:
        return 0;
    }
  }

  save() {
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Thành công',
    //   html: '<span>Đặt hàng thành công!</span>',
    //   showConfirmButton: true,
    // }).then((result) => {
    //   this.route.navigate(['/']);
    // });
    let response = {
      city: this.selectedCity,
      district: this.selectedDistrict,
      ward: this.selectedWard,
      fullname: this.fullName,
      gender: this.gender,
      email: this.email,
      cardNumber: this.cardNumber,
      cvc: this.cvc,
      holder: this.holder,
    };

    console.log(response);
    console.log(this.previousResponse);
    console.log(this.sum);
  }
}
