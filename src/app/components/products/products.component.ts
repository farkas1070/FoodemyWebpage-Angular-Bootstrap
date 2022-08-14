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
      url: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
      
    },
    {
      name: 'hamburger',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80"
      
    }
  ]
  
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToCart() {
    this.route.navigate(['Cart'])
  }

}
