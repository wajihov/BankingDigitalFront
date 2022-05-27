import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CustomerObservableComponent } from './customer-observable/customer-observable.component';
import { NewCostumerComponent } from './new-costumer/new-costumer.component';
import { ModifCustomerComponent } from './modif-customer/modif-customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customersObs', component: CustomerObservableComponent },
  { path: 'newCustomer', component: NewCostumerComponent },
  { path: 'modifCustomer/:id', component: ModifCustomerComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: '', redirectTo: 'customersObs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
