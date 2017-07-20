import { Component, OnInit } from '@angular/core';
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  urlOutput: string = "https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/register-user?name=alex+lee&email=hi.there@gmail.com&username=bi&password=asdQWE123!&phoneNumber=12341234";

  constructor(private http: Http) {
    this.register();
  }

  ngOnInit() {
  }

  register(){
    return this.http.get(this.urlOutput)
      .map((res: Response) => res.json());
  }

  submitForm(username: string, password:string, passwordConfirm: string, email:string, phoneNumber: string, firstName:string, lastName:string, address: string, addressTwo:string, city: string, state: string, postalCode: string ): void {
    console.log('username', username);
    console.log('Password', password);
    console.log('PasswordConfirm', passwordConfirm);
    console.log('Email', email);
    console.log('PhoneNumber', phoneNumber);
    console.log('FirstName', firstName);
    console.log('LastName', lastName);
    console.log('Address', address);
    console.log('Address2', addressTwo);
    console.log('City', city);
    console.log('State', state);
    console.log('PostalCode', postalCode);

    var outputString = "https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/register-user?" + "name=" + firstName + "+" + lastName + "&" + "email=" + email + "&" + "username=" + username + "&" + "password=" + password + "&" + "phoneNumber=" + phoneNumber;

    console.log('Link', outputString);



  }

}
