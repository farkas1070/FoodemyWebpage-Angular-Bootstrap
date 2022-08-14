import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public foodlist = [
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      
    }
  ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
