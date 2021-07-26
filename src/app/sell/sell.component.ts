import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { VERSION, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  constructor( 
    private ds: DataService
    ) { }
  
  ngOnInit(): void {
  }

  url = "../../assets"
  selectFile(e: any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }
  img: any;
  type: any;
  itemName: any;
  condition: any;
  categ: any;
  price: any;
  desc: any;
  list: any = {}
  addList(){
    this.list.img=this.img;
    this.list.name=this.itemName;
    this.list.user_id="1"
    this.list.type=this.type;
    this.list.condition=this.condition;
    this.list.price=this.price;
    this.list.description=this.desc;
    this.list.category=this.categ;

    this.ds.sendApiRequest("addList", JSON.parse(JSON.stringify(this.list))).subscribe((data: any) => {
    });
    console.log(this.list);
  }
}
