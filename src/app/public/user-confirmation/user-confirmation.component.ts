import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  submitForm(username: string, confirmationCode:string): void {
    console.log('username', username);
    console.log('Password', confirmationCode);

    var outputString = "https://441f7d04p3.execute-api.us-west-2.amazonaws.com/prod/confirm-registration?" + "username=" + username + "&" + "code=" + confirmationCode;

    console.log('Link', outputString);
  }

}
