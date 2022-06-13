import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }

  showMe:boolean = true

  ngOnInit(): void {
<<<<<<< HEAD
  }

    theMenu()
=======

  }
  theMenu()
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
  {
    this.showMe=!this.showMe
  }

}
