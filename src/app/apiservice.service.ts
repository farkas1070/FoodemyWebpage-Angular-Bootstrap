import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  //connect frontend to backend

  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllUserData():Observable<any> 
  {
    return this.http.get("http://localhost:3000/alluser")
  }
  addToCart(data:any):Observable<any> 
  {
    
    return this.http.post(`http://localhost:3000/cart`,data)
  }
  getAllFoodData():Observable<any> 
  {
    return this.http.get("http://localhost:3000/food")
  }
  getAllCartData(data:any):Observable<any> 
  {
    
    return this.http.get(`http://localhost:3000/usercart?id=${data.id}`);
  }

  createUser(data:any):Observable<any> 
  {
    console.log(data,"createapi-->")
    return this.http.post("http://localhost:3000/userregister",data)
  }
  loginUser(data:any):Observable<any> 
  {
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + "valami"
   });
    return this.http.post("http://localhost:3000/userlogin",data,{ headers: reqHeader })
  }

}
