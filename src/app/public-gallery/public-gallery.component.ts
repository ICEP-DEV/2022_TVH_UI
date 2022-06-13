import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-gallery',
  templateUrl: './public-gallery.component.html',
  styleUrls: ['./public-gallery.component.css']
})
export class PublicGalleryComponent implements OnInit {

  constructor() { }
<<<<<<< HEAD

  ngOnInit(): void {
  }

=======
  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }
>>>>>>> c3b44c0c26bcbf94671dd7f8a3eff93a9a7bcf1c
}
