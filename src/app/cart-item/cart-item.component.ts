import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item = '';
  @Input() size = '';
  @Input() type = '';
  @Input() quantity = '';
  @Input() color = '';


  getSize(size: string) {
    switch (size) {
      case 'lnam':
        return 'L Nam';
      case 'mnam':
        return 'M Nam';
      case 'lnu':
        return 'L Nữ';
      case 'mnu':
        return 'M Nữ';
      default:
        return '';
    }
  }

  getColor(color: string) {
    switch (color) {
      case 'blue':
        return 'Xanh';
      case 'black':
        return 'Đen';
      case 'white':
        return 'Trắng';
      default:
        return '';
    }
  }

  

  ngOnInit(): void {}
}
