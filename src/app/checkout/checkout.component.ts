import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private ds: DataService,
    private route: Router,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.index = localStorage.getItem("index");
    console.log(this.index);
    this.pullProducts()
  }
  cardView(i: any){
    
    localStorage.setItem("index", i);
    this.route.navigate(['/view']);
    console.log(i);
  }
  index: any;
  products:any;
  pullProducts(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.products = data.payload[this.index];
    console.log(this.products);
    })
  }
  shipItem(){
    let snackRef = this.snack.open("Success!, thank you for shopping with us", 'close', {duration: 2000});

    snackRef.afterDismissed().subscribe(() => {
      this.route.navigate([""]);
    });
    
    snackRef.onAction().subscribe(() => {
      this.route.navigate([""]);
    });
  }
}
