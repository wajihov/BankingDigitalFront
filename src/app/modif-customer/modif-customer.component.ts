import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'autoprefixer';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-modif-customer',
  templateUrl: './modif-customer.component.html',
  styleUrls: ['./modif-customer.component.css'],
})
export class ModifCustomerComponent implements OnInit {
  id!: number;
  formGroupUpdate!: FormGroup;
  getPerson!: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomer(this.id).subscribe((data: Customer) => {
      this.getPerson = data;
    });
    this.formGroupUpdate = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    console.log('persone : ', this.formGroupUpdate.value);
    this.customerService
      .updateCustomer(this.formGroupUpdate.value, this.getPerson.id)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/customersObs']);
      });
  }
}
