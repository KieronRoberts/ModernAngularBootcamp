import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit{
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Because it is'},
    { title: 'Why is the sky blue?', content: 'Because it is'},
    { title: 'Why is the sky blue?', content: 'Because it is'},

  ]

  constructor(){}

  ngOnInit(){}

  onClick(){
    this.modalOpen = !this.modalOpen;
  }
}
