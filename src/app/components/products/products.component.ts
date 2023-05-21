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
  currentuserid:number;
  userdata:any
  cartlist:any =[]

  constructor(private route:Router,private service:ApiserviceService, private sharedService: SharedService) { }
 
  ngOnInit(): void {
    this.service.getAllFoodData().subscribe((result) => {
      
      console.log(result,"result")
      this.foodData = result.data;
      this.originalData = result.data;
      this.foodDatalength = this.foodData.length
    })
    
    
    this.sharedService.sharedUserInfo.subscribe(message2 => this.userdata = message2)
      console.log(this.userdata)
      
    
      
    this.service.getAllCartData(this.userdata).subscribe((result) => {
        console.log(result,"userdata")
        console.log(this.userdata)
        this.cartlist = result.data
        this.sharedService.changeCartContents(this.cartlist);
      })
    
      
  }
  

  navigateToCart() {
    this.route.navigate(['Cart'])
  }
  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
    console.log(this.searchText);

  }
  addToCart(food:any) {
    
    let data = {
      Foodid:food.foodid,
      Userid: this.userdata.id

    }

    this.service.addToCart(data).subscribe((result)=>{
      console.log(data)
      console.log(result,"res --->")
    })
    
    
    
    
    
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
  logout(){
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    this.route.navigate(['Home'])
  }
  navigateToProfile(){
    this.route.navigate(['Profile'])
  }

}
