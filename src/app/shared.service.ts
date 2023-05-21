import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loggedinuser = new BehaviorSubject({});
  private usercart = new BehaviorSubject(this.initCartValue());
  private userinfo = new BehaviorSubject(this.initUserValue())

  sharedMessage = this.loggedinuser.asObservable();
  sharedUserCart = this.usercart.asObservable();
  sharedUserInfo = this.userinfo.asObservable();
  constructor() { } 

  initCartValue(){
    let cartlist = localStorage.getItem("cartlist")
    

    if (cartlist) {
      return JSON.parse(cartlist);
    } else {
      return []; 
    }
  }
  initUserValue(){
    return JSON.parse(localStorage.getItem("user") || '{}')
    
  }

  nextMessage(something: any): void {
    this.loggedinuser.next(something);
  }
  changeCartContents(cartData: any[]): void {
    this.usercart.next(cartData);
  }
  changeUserInfo(something:any){
    this.userinfo.next(something)
  }
}
