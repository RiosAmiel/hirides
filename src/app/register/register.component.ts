import { Component, Input, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog,
    private ds: DataService,
    private snack: MatSnackBar) { }
  
  ngOnInit(): void {
  }
  username:any;
  user_password:any;
  user_email:any;
  user_contact:any;
  userInfo: any = {};
  hide = true;
  regUser(){
    if(this.username == null || this.user_password == null || this.user_email == null || this.user_contact == null) {
      this.snack.open("Please Fill up the form", 'close');
    }
    else {
    this.userInfo.username = this.username;
    this.userInfo.user_password = this.user_password;
    this.userInfo.user_email = this.user_email;
    this.userInfo.user_contact = this.user_contact;

    // this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe((data: any) => {
    // });
    console.log(this.userInfo);
    }
  }
}
