import { Component, OnInit, ViewChild } from '@angular/core';
import { PricesComponent } from '../prices/prices.component';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  view: String = 'price';

  onDisplay(item: String) {
    this.view = item;
  }
}
