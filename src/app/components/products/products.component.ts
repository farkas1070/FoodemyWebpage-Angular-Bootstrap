import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  foodData:any;
  
  
  constructor(private route:Router,private service:ApiserviceService) { }

  ngOnInit(): void {
    this.service.getAllFoodData().subscribe((result) => {
      console.log(result,"result")
      this.foodData = result.data;
    })
  }
  navigateToCart() {
    this.route.navigate(['Cart'])
  }

}
