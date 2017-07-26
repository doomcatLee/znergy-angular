import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../user.interface';
import {AppService} from "../../services/app.service";
import {MdDialog} from '@angular/material';
import {Router, ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder, public dialog: MdDialog, public router:Router, private route: ActivatedRoute, private appService:AppService, private apiService: ApiService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      password: [''],
      passwordConfirm: [''],
      email: ['', [Validators.required, AppService.emailValidator]],
      phoneNumber: ['', [Validators.required, <any>Validators.minLength(10)]],
      address: [''],
      city: [''],
      state: [''],
      zipcode: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      firstName: [''],
      lastName: [''],
    });

    // subscribe to form changes
    this.subcribeToFormChanges();
  }

  async submitForm(a: string, b: string, c:string, d:string, e:string, f:string) {
    if(this.myForm.valid != true){
      this.dialog.open(DialogIncompleteForm);
    }else{
      this.appService.setUsername(a); //save username globally using appservice
      this.appService.setEmail(c); //save email globally using appservice
      var output = await this.apiService.registerUser(a,b,c,d,e,f);
      this.router.navigate(['/userConfirmation']);
    }
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}

@Component({
  selector: 'dialog-incomplete-form',
  templateUrl: 'dialog-incomplete-form.html',
  styleUrls: ['./user-registration.component.css']
})
export class DialogIncompleteForm{}

