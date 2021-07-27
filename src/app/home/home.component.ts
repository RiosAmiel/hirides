import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;

  
  constructor(config: NgbCarouselConfig, private ds: DataService) { 
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

  pullProducts(){
    this.ds.sendApiRequest("products", null).subscribe((data: { payload: any; }) => {
    this.products = data.payload;
    })
  }

}
