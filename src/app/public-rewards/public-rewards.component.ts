import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-rewards',
  templateUrl: './public-rewards.component.html',
  styleUrls: ['./public-rewards.component.css']
})
export class PublicRewardsComponent implements OnInit {

  constructor() { }
  
  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }

}
