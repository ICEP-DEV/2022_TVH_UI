import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor() {}

  selected!: Date | null;

  function () {    
    /* DONUT CHART
    */

   var donutData = [
     {
       label: 'Series2',
       data : 30,
       color: '#3c8dbc'
     },
     {
       label: 'Series3',
       data : 20,
       color: '#0073b7'
     },
     {
       label: 'Series4',
       data : 50,
       color: '#00c0ef',
     },
   ]
  }

}
