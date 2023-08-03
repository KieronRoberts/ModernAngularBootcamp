import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of Users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviewa'}
  ];

  items = [
    {
    image: '/assets/Images/couch.jpeg', 
    title: 'Couch', 
    description: 'This is a fantastic couch to sit on'
    },
    {
    image: '/assets/Images/dresser.jpeg',
    title: 'Dresser',
    description: 'This is a great dresser'
    }

  ];

  constructor(){}

  ngOnInIt(){

  }
}
