import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  editMode: boolean = false;
  private postId: string | undefined;
  public readonly:boolean = true;

  constructor(private service:ApiserviceService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) { // the id passed in paramMap.has('id') has to be same as it define in routing module.
        this.editMode = true;
        

      } else {
        this.editMode = false;
        
        
      }
    });

    CKEDITOR.replace( 'ckeditorContent', {
      fullPage: true,
      extraPlugins: 'font,panelbutton,colorbutton,colordialog,justify,indentblock,aparat,buyLink',
      // You may want to disable content filtering because if you use full page mode, you probably
      // want to  freely enter any HTML content in source mode without any limitations.
      allowedContent: true,
      autoGrow_onStartup: true,
      enterMode: CKEDITOR.ENTER_P
      
     
    
      
      
      
  } );

  }


  ckeditorContent:any;
  

  public post = {
    title: '',
    body: ''
  
  };


  public title:string ='';
  public body:string= ' ';
  public date:string ='';
  public message:string ='';

  clickhandle()
{
}

}
