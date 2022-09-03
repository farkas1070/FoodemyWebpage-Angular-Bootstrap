import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum:any
  cartlist: any

  constructor( private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedUserCart.subscribe(message => this.cartlist = message)
      console.log(this.cartlist)
      this.summarizePrice()
  }
  summarizePrice(){
    let sumvalue = 0
    for (let value of this.cartlist) {
      sumvalue += value.price;
    }
    this.sum = sumvalue
  }

  

}
