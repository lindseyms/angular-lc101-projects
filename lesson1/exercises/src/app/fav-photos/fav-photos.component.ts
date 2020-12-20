import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i1.wp.com/ukinterns.society19.com/wp-content/uploads/2018/08/366571dcd1cdff56c98ea61e5be59e5e.jpg?resize=564%2C564&ssl=1';
  image3 = 'https://i1.wp.com/ukinterns.society19.com/wp-content/uploads/2018/08/76710bbd900951cbc5a1fa8792659b06.jpg?resize=564%2C564&ssl=1';

  constructor() { }

  ngOnInit() {
  }

}