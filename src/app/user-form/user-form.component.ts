import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  registerUser(){
    alert("clicked register!");
  }
  loginUser(){
    alert("clicked login!");
  }

}
