import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // LoginStatus = new BehaviorSubject<boolean>(true);
  // Username$! : Observable<string>;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openLogin(){
    this.dialog.open(LoginComponent);
  }
  openRegister(){
    this.dialog.open(RegisterComponent);
  }
}
