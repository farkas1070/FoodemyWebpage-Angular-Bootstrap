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
  originalData:any;
  foodDatalength:number;
  lowerindex:number = 0;
  higherindex:number = 10;
  searchText:string = '';
  
  constructor(private route:Router,private service:ApiserviceService) { }
 
  ngOnInit(): void {
    this.service.getAllFoodData().subscribe((result) => {
      console.log(result,"result")
      this.foodData = result.data;
      this.originalData = result.data;
      this.foodDatalength = this.foodData.length
    })
  }

  navigateToCart() {
    this.route.navigate(['Cart'])
  }
  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
    console.log(this.searchText);

  }
  addToCart(i:any) {
    console.log(i)
    
  }
  filterProducts(type:string) {
    this.foodData = this.originalData
    this.foodData= this.foodData.filter(function(food:any) {
      return food.foodtype ==type;
    });
  }
  getOriginalArray(){
    this.foodData = this.originalData
  }
  turnPageForward(){
    this.lowerindex += 10;
    this.higherindex += 10;
    window.scroll(0,0);
  }
  turnPageBackward(){
    this.lowerindex -= 10;
    this.higherindex -= 10;
    window.scroll(0,0);
  }

}
