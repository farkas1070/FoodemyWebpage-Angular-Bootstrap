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
      productid: 1,
      name: 'Pizza',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      
    },
    {
      productid: 2,
      name: 'Salad',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      
    },
    {
      productid: 3,
      name: 'Coca Cola',
      price: 1.5,
      kcal: 75,
      healthy: false,
      url: "https://images.unsplash.com/photo-1562952546-12992a813a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 4,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 5,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 6,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 7,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 8,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 9,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 10,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 11,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    },
    {
      productid: 12,
      name: 'Carbonara',
      price: 23,
      kcal: 203,
      healthy: false,
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      
    }
  ]
  
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  navigateToCart() {
    this.route.navigate(['Cart'])
  }

}
