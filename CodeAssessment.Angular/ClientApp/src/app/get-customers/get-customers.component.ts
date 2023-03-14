import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'get-customers',
    templateUrl: './get-customers.component.html'
  })
  
  export class GetCustomerComponent{
    public customers: Customer[] = [];
  
    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string){
      http.get<Customer[]>(baseUrl + 'customers').subscribe(result => {
        this.customers = result;
      }, error => console.error(error));
    }
  }
  
  interface Customer{
    customerId: string,
    companyName: string,
    contactName: string,
    contactTitle: string,
    address: string,
    city: string,
    region: string,
    postalCode: string,
    country: string,
    fax: string,
    phone: string,
  }