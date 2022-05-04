import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {

  }
  title ='sweetalert2';
  alertWithSuccess(){
    Swal.fire("Thank you... ", 'Your application was successfully submitted ','success')
  }


}
