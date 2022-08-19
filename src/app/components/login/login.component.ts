import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm,FormControl, FormGroup, Validators} from "@angular/forms"
import { ApiserviceService } from 'src/app/apiservice.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private service: ApiserviceService) { }
  userlist: any
  errormsg: any

  ngOnInit(): void {
    this.service.getAllUserData().subscribe((result) => {
      this.userlist = result.data
      
    })
  }
  userForm = new FormGroup({
    
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required)
  });
  userSubmit() {
    this.service.loginUser(this.userForm.value).subscribe((result) => {
      console.log(result)
      if (result.message == 'something went wrong') {
        console.log(result)
        this.errormsg = "Wrong password, or username doesn't exist"
      }
      
      else {
        
        console.log(result)
        this.route.navigate(['Products']);
      }
      
    })
  } 

  navigateToLogin() {
    this.route.navigate(['login']);
  }
   

}
