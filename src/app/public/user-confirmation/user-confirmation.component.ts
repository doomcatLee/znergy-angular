import {Component, OnInit, NgModule, Input} from '@angular/core';
import 'rxjs/add/operator/map';
import {ApiService} from '../../services/api.service';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { UserRegistrationComponent } from '../../public/user-registration/user-registration.component';
import {AppService} from "../../services/app.service";

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [ UserRegistrationComponent ],
  bootstrap: [ UserRegistrationComponent ]
})


@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.css']
})
export class UserConfirmationComponent implements OnInit {
  private username:string;
  private email:string;

  constructor(private apiService: ApiService, private appService: AppService) {

  }

  ngOnInit() {
    this.username = this.appService.getUsername();
    this.email = this.appService.getEmail();
  }

  async submitForm(c:string){
    var output = await this.apiService.confirmUser(this.username,c);
    console.log(output);
  }

}
