import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { ViewComponent } from '../view/view.component';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  
  constructor(config: NgbCarouselConfig, private ds: DataService, private route: Router, private router: ActivatedRoute, public dialog: MatDialog) { 
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationIndicators = true;
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {
    this.pullProducts();
  }
  
  cardView(i: any){
    
    localStorage.setItem("index", i);
    this.route.navigate(['/view']);
    console.log(i);
  }
  products: any = {};
  pullProducts(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.products = data.payload;
    })
  }

}
