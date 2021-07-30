import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ds: DataService
    ) { }
  ngOnInit(): void {
    
    this.index = localStorage.getItem("index");
    console.log(this.index);
    this.pullProducts();
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
