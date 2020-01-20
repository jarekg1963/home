import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestwhetherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
  constructor(private _http: HttpClient) { }



  getTestwhether() {
    return this._http.get('./WeatherForecast');
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
