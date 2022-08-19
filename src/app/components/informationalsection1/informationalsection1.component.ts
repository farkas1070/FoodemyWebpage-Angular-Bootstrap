import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl, FormGroup, Validators} from "@angular/forms"
import { ApiserviceService } from 'src/app/apiservice.service'; 
@Component({
  selector: 'app-informationalsection1',
  templateUrl: './informationalsection1.component.html',
  styleUrls: ['./informationalsection1.component.css']
})
export class Informationalsection1Component implements OnInit {

  constructor(private service: ApiserviceService) { }
  errormsg: any;


  ngOnInit(): void {
  }
  userForm = new FormGroup({
    'fullname': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'mobile': new FormControl('',Validators.required)
  });

  userSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value)
      this.service.createUser(this.userForm.value).subscribe((result) =>{
        console.log(result,"res --->")
        if (result.message == "user already exists") {
          this.errormsg = "user already exists"
        }
        
      })
    }
    else {
      this.errormsg = "all field is required"
    }
  } 
 
}
