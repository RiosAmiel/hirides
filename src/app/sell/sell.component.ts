import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { VERSION, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  constructor() { }
  
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
  @Input() img: any;
  @Input() itemName: any;
  @Input() type: any;
  @Input() condition: any;
  @Input() price: any;
  @Input() desc: any;
  @Input() categ: any;
  list: any = {}
  addList(){
    this.list.img=this.img;
    this.list.name=this.itemName;
    this.list.type=this.type;
    this.list.condition=this.condition;
    this.list.price=this.price;
    this.list.description=this.desc;
    this.list.category=this.categ;
    console.log(this.list);
  }
}
