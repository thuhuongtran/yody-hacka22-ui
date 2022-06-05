import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface QuantitySize {
  id: number;
  size: string;
  quantity: number;
}

@Component({
  selector: 'app-quantity-selection',
  templateUrl: './quantity-selection.component.html',
  styleUrls: ['./quantity-selection.component.scss'],
})
export class QuantitySelectionComponent implements OnInit {
  constructor(private router: Router, private dataRoute: ActivatedRoute) {}

  upsaleStatus: string = 'standard';

  totalProducts = 0;

  quantitySizes: QuantitySize[] = [];

  previousPage: any;

  secondPage = {
    upsale: 'standard',
    sizes: [],
  };

  pageResult: any;

  ngOnInit(): void {
    this.dataRoute.paramMap.subscribe(() => {
      console.log(window.history.state);
      this.previousPage = window.history.state;
      this.pageResult = {
        ...window.history.state,
        upsale: 'standard',
        sizes: [],
      };
    });
  }

  switchUpsaleStatus(status: string): void {
    this.pageResult.upsale = status;
    this.pageResult.sizes = [];
    if (status === 'family') {
      this.addSize('mnam', 1);
      this.addSize('mnu', 1);
      this.addSize('', 1);
    }
    if (status === 'couple') {
      this.addSize('mnam', 1);
      this.addSize('mnu', 1);
    }
    if (status == 'group') {
      this.addSize();
      this.addSize();
      this.addSize();
      this.addSize();
      this.addSize();
      this.addSize();
    }
  }

  backToStandard() {
    this.pageResult.sizes = [];
    this.pageResult.upsale = 'standard';
  }

  onSizeChange(event: any, id: number) {
    this.pageResult.sizes[id - 1].size = event.target.value;
  }

  onQuantityChange(event: any, id: number) {
    this.pageResult.sizes[id - 1].quantity = event.target.value;
  }

  addSize(size = '', quantity = 0) {
    this.pageResult.sizes.push({
      id: this.pageResult.sizes.length + 1,
      size,
      quantity,
    });
  }

  removeSize(id: number) {
    this.pageResult.sizes = this.pageResult.sizes.filter(
      (item: any) => item.id !== id
    );
  }
}
