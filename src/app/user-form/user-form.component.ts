import { Component } from '@angular/core';

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
    var username = (<HTMLInputElement>document.getElementById('username')).value;
    console.log(username);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "https://jxfmonfrfa.execute-api.us-west-2.amazonaws.com/prod/import-data?tableName=students&email=" + username + "@gmail.com&name=" + username + "&customKey1=age&customValue1=200", true);
    xhttp.send();
  }

}
