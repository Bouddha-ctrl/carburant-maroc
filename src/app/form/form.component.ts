import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core';
import { FormClass } from '../form-class';
import { PricesService } from '../prices.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, DoCheck {
  form: FormClass;
  oldform: FormClass;
  date: Date;

  @Output() formEvent = new EventEmitter<number>();

  constructor(private priceService: PricesService) {
    this.date = this.getDate();
    this.priceService.getDieselPriceByDate(this.date);
    // this.priceService.getDieselPriceByDate(new Date()).subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.form = new FormClass();
    this.priceService
      .getDollarExchange(this.getDate())
      .then((result) => (this.form.taux = result.toFixed(2)));

    this.form.cotation = 1071;
    this.form.fret = 15;
    //this.form.taux = 10.24;
    this.form.taxePortuaires = 21.04;
    this.form.fraisApprocheFixe = 16.62;
    this.form.fraisApprocheVariable = 1.8;
    this.form.taxeParafiscale = 0.25;
    this.form.remunerationStockage = 150;
    this.form.tic = 242.2;
    this.form.tva = 10;
    this.form.creditDroit = 0.41;
    this.form.fraisMargeDistribution = 28.4;
    this.form.coulageDetaillants = 0.5;
    this.form.correctionVariationThermique = 1.5;
    this.form.margeDetail = 26.4;

    this.formEvent.emit(this.form.calcule());
    this.oldform = Object.assign({}, this.form);
  }

  ngDoCheck(): void {
    if (!this.form.equals(this.oldform)) {
      this.oldform = Object.assign({}, this.form);
      this.formEvent.emit(this.form.calcule());
    }
  }

  getDate(): Date {
    let d = new Date();
    return d;
  }
}
