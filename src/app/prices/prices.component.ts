import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css'],
})
export class PricesComponent implements OnInit {
  constructor() {}

  @Input() dieselPrice: number;
  ngOnInit(): void {}

  setPrice(newPrice: number) {
    this.dieselPrice = newPrice;
  }
}
