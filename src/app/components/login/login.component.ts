import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm,FormControl, FormGroup, Validators} from "@angular/forms"
import { ApiserviceService } from 'src/app/apiservice.service'; 
import { SharedService } from "../../shared.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: ApiserviceService, private sharedService: SharedService,private cookieService: CookieService) { }
  userlist: any
  errormsg: any
  loggedinuser:object;
  currentuser: any
  ngOnInit(): void {
    this.service.getAllUserData().subscribe((result) => {
      this.userlist = result.data
      this.sharedService.sharedMessage.subscribe(message => this.loggedinuser = message)
    })
  }
  userForm = new FormGroup({
    
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
  });
  userSubmit() {
    this.service.loginUser(this.userForm.value).subscribe((result) => {

      if (result.message == 'something went wrong') {
        console.log(result)
        this.errormsg = "Wrong password, or username doesn't exist"
      }
      if (result.message == 'wrong password entered') {
        console.log(result)
        this.errormsg = "Wrong password, try again"
      }
      if (result.token) {
        localStorage.setItem("token", result.token);
        this.cookieService.set( 'auth', result.token );
        
        
        delete result.data.password
        
        localStorage.setItem("user", JSON.stringify(result.data));
        console.log(result)
        
        
        this.newMessage(result.data)
        
        this.route.navigate(['Products']);
      }
      else {
        this.errormsg = "No user with given credentials, try again"
      }
      
    })
  } 

  navigateToLogin() {
    this.route.navigate(['Contact']);
  }
  newMessage(something:any) {
    this.sharedService.nextMessage(something)
  }

}
