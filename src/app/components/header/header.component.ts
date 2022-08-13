import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeaderComponent implements OnInit {
  

  title: string = 'my-app';
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  
  navigateToLogin() {
    this.route.navigate(['Login'])
  }
  navigateToAbout() {
    this.route.navigate(['About'])
  }
  navigateToContact() {
    this.route.navigate(['Contact'])
  }

}
