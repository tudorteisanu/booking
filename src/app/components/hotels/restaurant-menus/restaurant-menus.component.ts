import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-restaurant-menus',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-menus.component.html',
  styleUrl: './restaurant-menus.component.css'
})
export class RestaurantMenusComponent {
  menus = signal([
    {
      id: 1,
      pagesCount: 2,
      image: 'assets/images/menu_1.png'
    },
    {
      id: 2,
      pagesCount: 2,
      image: 'assets/images/menu_1.png'
    },
    {
      id: 3,
      pagesCount: 2,
      image: 'assets/images/menu_1.png'
    },
    {
      id: 4,
      pagesCount: 2,
      image: 'assets/images/menu_1.png'
    },
  ])
}
