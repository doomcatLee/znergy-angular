import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../user.interface';
import {AppService} from "../../services/app.service";
import {MdDialog} from '@angular/material';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder, public dialog: MdDialog) { }

  ngOnInit() {
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
  }

  public openDialog() {
    this.dialog.open(DialogIncompleteForm);
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

