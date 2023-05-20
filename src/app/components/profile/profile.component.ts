import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private service:ApiserviceService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.sharedUserInfo.subscribe(message => this.user = message)
      console.log(this.user)
  }

}
