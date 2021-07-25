import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card: any = [
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
    {title:'Mountain Bike', price:2000, img:'./assets/dp.png'},
  ]

}
