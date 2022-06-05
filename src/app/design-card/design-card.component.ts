import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-design-card',
  templateUrl: './design-card.component.html',
  styleUrls: ['./design-card.component.scss']
})
export class DesignCardComponent implements OnInit {
  @Input() design: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
