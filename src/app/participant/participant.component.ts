import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


=======
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

<<<<<<< HEAD
  title ='Admin';
  fileName = 'applicants.xlsx';
  status = 'Pending..';

  exportTableToExcel(): void {
    const element = document.getElementById('app-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName)

  }

  getStatusAccepted(us: any){
    console.log("Accepted");
    us.status ="Accepted"
  }
  getStatusRejected(us: any){
    console.log("Rejected");
    us.status ="Rejected"
  }


  constructor( private service:ApiserviceService, private route:Router) { }

  readData:any;
  ngOnInit(): void {

    this.service.getadminLoadFile().subscribe((res) =>{
      console.log(res, "res==>");

      this.readData = res.data;
  })


=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
  }

}
