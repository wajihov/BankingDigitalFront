import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-observable',
  templateUrl: './customer-observable.component.html',
  styleUrls: ['./customer-observable.component.css'],
})
export class CustomerObservableComponent implements OnInit {
  errorMessage!: string;
  searchFormGroup: FormGroup | undefined;
  customers!: Observable<Array<Customer>>;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control(''),
    });
    this.hundelSearchCustomers();
  }

  hundelSearchCustomers() {
    let kw = this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  /* handleDeleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.id).subscribe({
      next: (data) => {
        this.hundelSearchCustomers();
      },
      error: (err) => {
        console.log(err);
      },
    });
  } */

  handleDeleteCustomer(customer: Customer) {
    let conf = confirm('Are you Sure to delete?');
    if (!conf) {
      return;
    } else {
      this.customerService.deleteCustomer(customer.id).subscribe({
        next: (resp) => {
          this.customers = this.customers.pipe(
            map((data) => {
              let index = data.indexOf(customer);
              data.slice(index, 1);
              return data;
            })
          );
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  handleModifyCustomer(c: Customer) {
    this.router.navigate(['/modifCustomer/'+c.id]);
  }
}
