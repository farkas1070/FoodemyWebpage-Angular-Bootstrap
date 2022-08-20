import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homebottom',
  templateUrl: './homebottom.component.html',
  styleUrls: ['./homebottom.component.css']
})
export class HomebottomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToSignUp(){
    this.router.navigate(['Contact'])
  }

}
