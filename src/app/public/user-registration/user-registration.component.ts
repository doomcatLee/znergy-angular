import {Component, OnInit, Input, Output} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import {ApiService} from '../../services/api.service';
import {AppService} from '../../services/app.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private http: Http, private apiService: ApiService, private appService: AppService) {
  }

  ngOnInit() {
  }

  async submitForm(a: string, b: string, c: string, d: string, e: string, f: string){
    this.appService.setUsername(a); //save username globally using appservice
    this.appService.setEmail(c); //save email globally using appservice
    var output = await this.apiService.registerUser(a,b,c,d,e,f);
    console.log(output);
  }

}

