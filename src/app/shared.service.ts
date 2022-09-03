import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loggedinuser = new BehaviorSubject({});
  private usercart = new BehaviorSubject(this.initValue());

  sharedMessage = this.loggedinuser.asObservable();
  sharedUserCart = this.usercart.asObservable();
  constructor() { } 

  initValue(){
    let cartlist = localStorage.getItem("cartlist")
    if (cartlist) {
      return JSON.parse(cartlist);
    } else {
      return [];
    }
  }

  nextMessage(message: string) { 
    this.loggedinuser.next(message)
  }
  changeCartContents(something:any) { 
    this.usercart.next(something)
  }
}
