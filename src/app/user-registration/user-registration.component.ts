import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(username: string, password:string, passwordConfirm: string, company:string,firstName:string, lastName:string, address: string, addressTwo:string, city: string, state: string, postalCode: string ): void {
    console.log('username', username);
    console.log('Password', password);
    console.log('PasswordConfirm', passwordConfirm);
    console.log('Company', company);
    console.log('FirstName', firstName);
    console.log('LastName', lastName);
    console.log('Address', address);
    console.log('Address2', addressTwo);
    console.log('City', city);
    console.log('State', state);
    console.log('PostalCode', postalCode);

  }

}
