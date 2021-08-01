import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: ActivatedRoute,private ds: DataService,private route: Router
    ) { }
  ngOnInit(): void {
    
    this.index = localStorage.getItem("index");
    console.log(this.index);
    this.pullProducts();
  }
  check(){
    this.route.navigate(['/checkout']);
  }
  index: any;
  products:any;
  pullProducts(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.products = data.payload[this.index];
    console.log(this.products);
    })
  }
  


}
