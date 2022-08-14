import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToCart() {
    this.route.navigate(['Cart'])
  }

}
