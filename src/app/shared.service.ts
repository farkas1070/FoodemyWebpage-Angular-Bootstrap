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

  nextMessage(message: string) { 
    this.loggedinuser.next(message)
  }
  changeCartContents(something:any) { 
    this.usercart.next(something)
  }
  changeUserInfo(something:any){
    this.userinfo.next(something)
  }
}
