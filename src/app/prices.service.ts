import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root',
})
export class PricesService {
  res: any;
  err: any;
  constructor(private http: HttpClient) {}

  priceDate: Date;

  private extractData(res: Response): any {
    let day = this.priceDate.getDate().toString();
    let month = this.priceDate.getMonth().toString();
    let year = this.priceDate.getFullYear().toString();
    console.log('date :', day);
    const body = res;
    console.log(typeof body);
    console.log(body);
    return;
  }

  _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error');
  }

  getDollarExchange(date: Date) {
    var myHeaders = new Headers();
    myHeaders.append('apikey', 'nh2YsXz06ahO983UGvM22XWJh2WUxHQM');

    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    let dateString = date.toISOString().split('T')[0];

    return fetch(
      'https://api.apilayer.com/exchangerates_data/convert?to=MAD&from=USD&amount=1&date=' +
        dateString,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.result)
      .catch((error) => 0);
  }

  getDieselPriceByDate(date: Date) {
    /*
    console.log(date);
    this.priceDate = date;
    let endPoint =
      'https://www.theice.com/marketdata/DelayedMarkets.shtml?getHistoricalChartDataAsJson=&marketId=5444721&historicalSpan=2';

    
    var requestOptions:any = {
      method: 'GET',
      redirect: 'follow',
      "Content-Type": "application/json"
    };

    fetch(
      endPoint,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    return;
  }*/
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'text/html');
    headers = headers.set('method', 'GET');
    headers = headers.set('redirect', 'follow');
    this.http
      .request(
        'GET',
        'https://www.theice.com/marketdata/DelayedMarkets.shtml?getHistoricalChartDataAsJson=&marketId=5444721&historicalSpan=2',
        { headers }
      )
      .subscribe(
        (res: any) => {
          this.res = res;
          console.log('Result:', res);
        },
        (err: any) => {
          console.log('Error', err);
          this.err = err;
        }
      );
  }
}
