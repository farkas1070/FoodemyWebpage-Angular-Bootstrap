import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { SharedService } from "../../shared.service";

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
  cartlist: any

  constructor(private route:Router,private service:ApiserviceService, private sharedService: SharedService) { }
 
  ngOnInit(): void {
    this.service.getAllFoodData().subscribe((result) => {
      console.log(result,"result")
      this.foodData = result.data;
      this.originalData = result.data;
      this.foodDatalength = this.foodData.length
    })
    this.sharedService.sharedUserCart.subscribe(message => this.cartlist = message)
      console.log(this.cartlist)
  }

  navigateToCart() {
    this.route.navigate(['Cart'])
  }
  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
    console.log(this.searchText);

  }
  addToCart(i:any) {
    this.cartlist.push(i)
    localStorage.setItem('cartlist', JSON.stringify(this.cartlist))
    console.log(this.cartlist)
    
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
  navigateToHome(){
    this.route.navigate(['Home'])
  }
  navigateToProfile(){
    this.route.navigate(['Profile'])
  }

}
