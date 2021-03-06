import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private registerUrl = 'https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/register-user?';
  private confirmUrl = 'https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/confirm-registration?';

  constructor(private http: Http) { }

  async registerUser(username: string, password:string, email:string, phoneNumber: string, firstName:string, lastName:string): Promise<number> {
    const outputUrl = this.registerUrl + "name=" + firstName + "+" + lastName + "&" + "email=" + email + "&" + "username=" + username + "&" + "password=" + password + "&" + "phoneNumber=" + phoneNumber;
    const response = await this.http.get(outputUrl).toPromise();
    var statusCode = response.json().code;
    return response.json();
  }

  async confirmUser(username: string, confirmCode: string): Promise<number> {
    const outputUrl = this.confirmUrl + 'username=' + username + '&code=' + confirmCode;
    const response = await this.http.get(outputUrl).toPromise();
    return response.json();
  }

}
