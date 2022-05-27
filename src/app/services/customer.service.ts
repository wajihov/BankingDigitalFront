import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Observable} from "rxjs/dist/types";
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  errorMessage!: string;
  constructor(private httpClient: HttpClient) {}

  public getCustomers(): Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(
      environment.backendHost + '/customers'
    );
  }

  public searchCustomers(keyword: string): Observable<Array<Customer>> {
    return this.httpClient.get<Array<Customer>>(
      environment.backendHost + '/customers/search?keyword=' + keyword
    );
  }

  public saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(
      environment.backendHost + '/customers',
      customer
    );
  }

  public deleteCustomer(id: Number) {
    return this.httpClient.delete(environment.backendHost + '/customers/' + id);
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      environment.backendHost + '/customers/' + id
    );
    /* .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return throwError(err);
        })
      );*/
  }

  public updateCustomer(customer: Customer, id: Number): Observable<Customer> {
    return this.httpClient.put<Customer>(
      environment.backendHost + '/customers/' + id,
      customer
    );
  }
}
