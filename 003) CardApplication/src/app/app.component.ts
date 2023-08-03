import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/Tree.jpg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/Mountain.jpg',
      username: 'mountainlover',
      content: 'Here is a picture of a snow mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/Biking.jpg',
      username: 'biking122',
      content: 'I did some biking today'
    },    
  ]
}
