import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { VERSION, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  constructor( 
    private ds: DataService,
    private snack: MatSnackBar
    ) { }
  
  ngOnInit(): void {
  }

  url:string =  ""
  selectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  
  itemName: any;
  desc: any;
  price: any;
  type: any;
  condition: any;
  category: any;
  list: any = {}

  addList(){
    if(this.itemName == null || this. desc == null || this. price == null || this. type == null){
      this.snack.open("Please Fill up the form", 'close');
    }
    else if(this.category == null){
      this.snack.open("Please click the for sale button", 'close');
    }
    else {
    // this.list.user_id="1"
    this.list.name=this.itemName;
    this.list.description=this.desc;
    this.list.price=this.price;
    this.list.img=this.url;
    this.list.type=this.type;
    this.list.condition=this.condition;
    this.list.category=this.category;

    this.ds.sendApiRequest("addList", JSON.parse(JSON.stringify(this.list))).subscribe((data: any) => {
    });
    console.log(this.list);
  }
 }
}
