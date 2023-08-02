import { Component, OnInit } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent {

  photoUrl: string = '';

  constructor(private FetchPhotoService: FetchPhotoService){
    this.fetchPhoto();
  }

  onClick(){
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.FetchPhotoService.getPhoto().subscribe(response=>{
      this.photoUrl = response.urls.regular;
    });
  }

  ngOnInit(){}
}
