import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import { Announcements } from '../interfaces/announcements';
import * as XLSX from 'xlsx';
=======
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c

@Component({
  selector: 'app-public-annoucement',
  templateUrl: './public-annoucement.component.html',
  styleUrls: ['./public-annoucement.component.css']
})
export class PublicAnnoucementComponent implements OnInit {

<<<<<<< HEAD
  constructor(private service:ApiserviceService, private route:Router) { }

  readData:any;
  announcements!: Announcements[];

  ngOnInit(): void {


    this.service.getnoticeLoadFile().subscribe((res:any) =>{
      console.log(res, "res==>");


      this.announcements = res.data;
      console.log(this.announcements[0].title)
  })
  }



  removeHTML(str:any){ 
    var tmp = document.createElement("DIV");
    tmp.innerHTML = str;
    return tmp.textContent || tmp.innerText || "";
}

=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
}
