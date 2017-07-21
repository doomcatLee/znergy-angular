import { Component, OnInit } from '@angular/core';
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {ApiService} from "../services/api.service";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private http: Http, private apiService: ApiService) {
  }

  ngOnInit() {
  }

  async submitForm(a: string, b: string, c: string, d: string, e: string, f: string){
    console.log(a,b,c,d,e,f);
    console.log(await this.apiService.registerUser(a,b,c,d,e,f));
  }

}

