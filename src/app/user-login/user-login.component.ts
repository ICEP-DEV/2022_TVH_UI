import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {ApiserviceService} from '../apiservice.service';
import { Router } from '@angular/router';
import {ReactiveFormsModule, FormsModule, Validators, FormGroup, FormControl} from '@angular/forms';
import {  EventEmitter, Input, Output } from '@angular/core';
=======
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

<<<<<<< HEAD
  password:string =''
  email:string =''

  constructor(private service:ApiserviceService, private route:Router) { }

  ngOnInit(): void {


    this.userLoginForm = new FormGroup({

      "email": new FormControl(null, [Validators.required, Validators.email]),///
      "password": new FormControl(null,[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-z]*')]), ///

       //"pdf": new FormControl(null, [Validators.required, requiredFileType('pdf')])

    })

  }

  get emails(){return this.userLoginForm.get('email');}
  get passwords(){return this.userLoginForm.get('password');}

  userLoginForm:any;

  public emal:string =''
  public passw:string =''


  clickhandle(){

    this.service.getLogin({"email":this.emal, "password": this.passw }).subscribe((res)=>{
       
     

      if(res.message =="User sucessfully signed In✔✔✔")
      {
        console.log("im here");
        alert("You successfully loged in..")
        this.route.navigate(["home"])
      }
      else 
      {
        alert("Please check your email or password is incorrect");
      }
    });
    
    
  }




=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
}
