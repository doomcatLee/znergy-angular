import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../user.interface';
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    // the long way
    // this.myForm = new FormGroup({
    //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    //     address: new FormGroup({
    //         address1: new FormControl('', <any>Validators.required),
    //         postcode: new FormControl('8000')
    //     })
    // });

    // the short way
    this.myForm = this._fb.group({
      username: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      email: ['', [Validators.required, AppService.emailValidator]],
      password: [''],
      passwordConfirm: [''],
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      phoneNumber: ['', [Validators.required, <any>Validators.minLength(10)]],
      zipcode: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });

    //<any>Validators.pattern('[A-Za-z]{5}')

    // subscribe to form changes
    this.subcribeToFormChanges();

    // Update form model
    // const people = {
    // 	name: 'Jane',
    // 	address: {
    // 		street: 'High street',
    // 		postcode: '94043'
    // 	}
    // };

    // (<FormGroup>this.myForm)
    //     .setValue(people, { onlySelf: true });

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
