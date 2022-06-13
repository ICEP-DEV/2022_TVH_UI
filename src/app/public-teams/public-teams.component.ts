import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import {ApiserviceService} from '../apiservice.service';
=======
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c

@Component({
  selector: 'app-public-teams',
  templateUrl: './public-teams.component.html',
  styleUrls: ['./public-teams.component.css']
})
export class PublicTeamsComponent implements OnInit {

<<<<<<< HEAD
  

  constructor(private service:ApiserviceService, private route:Router) { }
  oganizer:any;
  volunteer:any;
  mentor:any;
  orgteam:any;
=======
  constructor() { }

>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
  showMe:boolean = true

  ngOnInit(): void {

<<<<<<< HEAD
    this.service.getOrginiser().subscribe((res) =>{
      console.log(res, "res==>");

      this.oganizer = res.data;
  })


  this.service.getVolunteer().subscribe((res) =>{
    console.log(res, "res==>");

    this.volunteer = res.data;
})


this.service.getMentor().subscribe((res) =>{
  console.log(res, "res==>");

  this.mentor = res.data;
})

this.service.getOrgTeam().subscribe((res) =>{
  console.log(res, "res==>");

  this.orgteam = res.data;
})


  }

  

=======
  }
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
  theMenu()
  {
    this.showMe=!this.showMe
  }

<<<<<<< HEAD

=======
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
}
