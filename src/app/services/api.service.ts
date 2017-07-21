import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private registerUrl = 'https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/register-user?name=5039983176+Lee&email=donggunjs@gmail.com&username=donggunleeee&password=123!!@#Qwe&phoneNumber=5039983176';

  constructor(private http: Http) { }

  async registerUser(): Promise<number> {
    const response = await this.http.get(this.registerUrl).toPromise();
    return response.json();
  }

}
