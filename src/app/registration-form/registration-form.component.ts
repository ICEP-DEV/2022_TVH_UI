import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title ='sweetalert2';
  alertWithSuccess(){
    Swal.fire("Thank you... ", 'Your application was successfully submitted ','success')
  }

}
