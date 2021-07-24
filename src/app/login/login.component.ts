import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private ds: DataService,
    private snack: MatSnackBar) { }

  
  
  ngOnInit(): void {
  }
  username: any;
  user_password: any;
  hide = true;
  userInfo:any = {};

  loginUser(){
    if(this.username == null || this.user_password == null){
      this.snack.open("Please Fill up the form", 'close');
    }
    else {
    this.userInfo.username = this.username;
    this.userInfo.user_password = this.user_password;

    console.log(this.userInfo);
    }
  }
}
